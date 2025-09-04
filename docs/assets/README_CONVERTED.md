# 📁 Arquivos de Logo Convertidos

## ✅ Conversão Bem-sucedida!

Os logos SVG foram convertidos para múltiplos formatos e resoluções.

## 📂 Estrutura de Arquivos

```
converted/
├── png/           # Formato PNG com transparência
│   ├── logo-widia.png (180x60)
│   ├── logo-widia@2x.png (360x120)
│   ├── logo-widia@3x.png (540x180)
│   ├── logo-icon-only.png (100x100)
│   ├── logo-icon-only@2x.png (200x200)
│   ├── logo-icon-only@3x.png (300x300)
│   ├── logo-social-media.png (500x500)
│   ├── logo-social-media@2x.png (1000x1000)
│   ├── logo-social-media@3x.png (1500x1500)
│   ├── linkedin-banner.png (1584x396)
│   ├── linkedin-banner@2x.png (3168x792)
│   ├── linkedin-banner@3x.png (4752x1188)
│   ├── linkedin-banner-minimal.png (1584x396)
│   ├── linkedin-banner-minimal@2x.png (3168x792)
│   └── linkedin-banner-minimal@3x.png (4752x1188)
│
├── jpg/           # Formato JPG com fundo branco
│   └── [mesmos arquivos acima em .jpg]
│
└── gif/           # Formato GIF
    └── [mesmos arquivos acima em .gif]
```

## 🎨 Formatos Disponíveis

- **PNG**: Ideal para web e aplicações, mantém transparência
- **JPG**: Para uso em documentos e onde transparência não é necessária
- **GIF**: Para compatibilidade com sistemas mais antigos

## 📏 Resoluções

- **1x**: Tamanho original
- **2x**: Retina displays (2x tamanho)
- **3x**: Ultra HD displays (3x tamanho)

## 🚀 Como Usar o Script

Para converter novos SVGs no futuro:

```bash
cd docs/assets
python3 convert_logos.py
```

Ou especificar diretórios customizados:

```bash
python3 convert_logos.py [input_dir] [output_dir]
```

## 📦 Requisitos

- Python 3.x
- Bibliotecas: `cairosvg`, `pillow`
- Sistema: Cairo library (instalado via `brew install cairo` no macOS)

## ⚠️ Nota para macOS

Se encontrar erro de biblioteca Cairo, execute:
```bash
export DYLD_LIBRARY_PATH=/opt/homebrew/lib:$DYLD_LIBRARY_PATH
```

---
*Última conversão: Janeiro 2025*