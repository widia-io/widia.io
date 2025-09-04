#!/usr/bin/env python3
"""
SVG to Multiple Format Converter
Converts SVG logos to PNG, JPG, and GIF formats with multiple resolutions.
Maintains original dimensions and quality.
"""

import os
import sys
from pathlib import Path
import cairosvg
from PIL import Image
import io

class LogoConverter:
    def __init__(self, input_dir=".", output_dir="converted"):
        """
        Initialize the converter with input and output directories.
        
        Args:
            input_dir: Directory containing SVG files
            output_dir: Directory where converted files will be saved
        """
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        
        # Define resolutions multipliers
        self.resolutions = {
            '1x': 1.0,
            '2x': 2.0,
            '3x': 3.0
        }
        
        # Define output formats
        self.formats = ['png', 'jpg', 'gif']
        
    def setup_directories(self):
        """Create output directory structure."""
        for format_type in self.formats:
            format_dir = self.output_dir / format_type
            format_dir.mkdir(parents=True, exist_ok=True)
            print(f"✅ Created directory: {format_dir}")
    
    def get_svg_dimensions(self, svg_path):
        """
        Extract dimensions from SVG viewBox attribute.
        
        Args:
            svg_path: Path to SVG file
            
        Returns:
            tuple: (width, height) or None if not found
        """
        try:
            with open(svg_path, 'r') as f:
                content = f.read()
                
            # Look for viewBox attribute
            import re
            viewbox_match = re.search(r'viewBox="0 0 (\d+) (\d+)"', content)
            if viewbox_match:
                width = int(viewbox_match.group(1))
                height = int(viewbox_match.group(2))
                return width, height
                
            # Look for width and height attributes
            width_match = re.search(r'width="(\d+)"', content)
            height_match = re.search(r'height="(\d+)"', content)
            if width_match and height_match:
                return int(width_match.group(1)), int(height_match.group(1))
                
        except Exception as e:
            print(f"⚠️ Error reading dimensions from {svg_path}: {e}")
        
        return None
    
    def svg_to_png(self, svg_path, output_path, scale=1.0):
        """
        Convert SVG to PNG using cairosvg.
        
        Args:
            svg_path: Path to source SVG file
            output_path: Path for output PNG file
            scale: Scale factor for resolution
        """
        dimensions = self.get_svg_dimensions(svg_path)
        if dimensions:
            width, height = dimensions
            width = int(width * scale)
            height = int(height * scale)
            
            cairosvg.svg2png(
                url=str(svg_path),
                write_to=str(output_path),
                output_width=width,
                output_height=height,
                dpi=300  # High DPI for quality
            )
        else:
            # Fallback without specific dimensions
            cairosvg.svg2png(
                url=str(svg_path),
                write_to=str(output_path),
                scale=scale,
                dpi=300
            )
    
    def convert_to_other_formats(self, png_path, base_name, resolution_suffix, scale):
        """
        Convert PNG to JPG and GIF formats.
        
        Args:
            png_path: Path to PNG file
            base_name: Base name for output files
            resolution_suffix: Resolution suffix (e.g., '@2x')
            scale: Scale factor used
        """
        # Open the PNG
        img = Image.open(png_path)
        
        # Convert to JPG (add white background for transparency)
        jpg_path = self.output_dir / 'jpg' / f"{base_name}{resolution_suffix}.jpg"
        if img.mode in ('RGBA', 'LA', 'P'):
            # Create white background
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if 'A' in img.mode else None)
            background.save(jpg_path, 'JPEG', quality=95, optimize=True)
        else:
            img.save(jpg_path, 'JPEG', quality=95, optimize=True)
        
        # Convert to GIF
        gif_path = self.output_dir / 'gif' / f"{base_name}{resolution_suffix}.gif"
        if img.mode == 'RGBA':
            # Convert RGBA to P mode with transparency for GIF
            alpha = img.split()[-1]
            img = img.convert('RGB').convert('P', palette=Image.ADAPTIVE, colors=255)
            mask = Image.eval(alpha, lambda a: 255 if a <= 128 else 0)
            img.paste(255, mask=mask)
            img.save(gif_path, 'GIF', transparency=255)
        else:
            img.convert('P', palette=Image.ADAPTIVE, colors=256).save(gif_path, 'GIF')
    
    def convert_svg(self, svg_path):
        """
        Convert a single SVG file to multiple formats and resolutions.
        
        Args:
            svg_path: Path to SVG file
        """
        base_name = svg_path.stem
        print(f"\n🎨 Converting: {svg_path.name}")
        
        dimensions = self.get_svg_dimensions(svg_path)
        if dimensions:
            print(f"   Original dimensions: {dimensions[0]}x{dimensions[1]}px")
        
        for res_name, scale in self.resolutions.items():
            # Determine suffix
            resolution_suffix = f"@{res_name[0]}" if res_name != '1x' else ''
            
            # Convert to PNG first
            png_filename = f"{base_name}{resolution_suffix}.png"
            png_path = self.output_dir / 'png' / png_filename
            
            try:
                self.svg_to_png(svg_path, png_path, scale)
                
                # Get actual size of created PNG
                with Image.open(png_path) as img:
                    actual_size = img.size
                print(f"   ✅ PNG {res_name}: {actual_size[0]}x{actual_size[1]}px → {png_filename}")
                
                # Convert PNG to other formats
                self.convert_to_other_formats(png_path, base_name, resolution_suffix, scale)
                print(f"   ✅ JPG {res_name}: {actual_size[0]}x{actual_size[1]}px → {base_name}{resolution_suffix}.jpg")
                print(f"   ✅ GIF {res_name}: {actual_size[0]}x{actual_size[1]}px → {base_name}{resolution_suffix}.gif")
                
            except Exception as e:
                print(f"   ❌ Error converting {res_name}: {e}")
    
    def convert_all(self):
        """Convert all SVG files in the input directory."""
        # Setup directories
        self.setup_directories()
        
        # Find all SVG files
        svg_files = list(self.input_dir.glob("*.svg"))
        
        if not svg_files:
            print(f"❌ No SVG files found in {self.input_dir}")
            return
        
        print(f"\n📁 Found {len(svg_files)} SVG files to convert")
        print("-" * 50)
        
        # Convert each SVG
        for svg_file in svg_files:
            self.convert_svg(svg_file)
        
        # Summary
        print("\n" + "=" * 50)
        print("✨ Conversion Complete!")
        print(f"📁 Output directory: {self.output_dir.absolute()}")
        
        # Count generated files
        for format_type in self.formats:
            format_dir = self.output_dir / format_type
            count = len(list(format_dir.glob(f"*.{format_type}")))
            print(f"   • {format_type.upper()}: {count} files")


def main():
    """Main function to run the converter."""
    # Parse command line arguments
    if len(sys.argv) > 1:
        input_dir = sys.argv[1]
    else:
        input_dir = "."
    
    if len(sys.argv) > 2:
        output_dir = sys.argv[2]
    else:
        output_dir = "converted"
    
    print("""
╔══════════════════════════════════════════╗
║     SVG to PNG/JPG/GIF Converter        ║
║         High Quality & Multi-Res         ║
╚══════════════════════════════════════════╝
""")
    
    # Create and run converter
    converter = LogoConverter(input_dir, output_dir)
    converter.convert_all()


if __name__ == "__main__":
    main()