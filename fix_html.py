# -*- coding: utf-8 -*-
with open('index.html', 'r', encoding='latin-1') as f:
    lines = f.readlines()

operadores_idx = -1
footer_idx = -1

for i, line in enumerate(lines):
    if '<section id="operadores-embed"' in line:
        operadores_idx = i - 1  # Get comment
    if '<footer class="footer container">' in line:
        footer_idx = i

if operadores_idx != -1 and footer_idx != -1:
    cta_lines = [
        '\n',
        '        <!-- Nova Seção: CTA Final -->\n',
        '        <section class="container" style="display: flex; justify-content: center; padding: 40px 20px 80px 20px;">\n',
        '            <button class="play-button" onclick="window.location.href=\'https://agent-connect-3ygs.onrender.com/\'" aria-label="Inicie sua jornada" style="transform: scale(1.1);">\n',
        '                <span class="icon">▶</span>\n',
        '                <span class="label" style="max-width: 250px; opacity: 1; margin-left: 10px; font-weight: 600; font-size: 1.1rem;">Inicie sua jornada</span>\n',
        '            </button>\n',
        '        </section>\n',
        '\n'
    ]
    
    new_lines = lines[:operadores_idx] + cta_lines + lines[footer_idx:]
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Done! Sliced from {operadores_idx} to {footer_idx}")
else:
    print(f"Tags not found! Operadores: {operadores_idx}, Footer: {footer_idx}")
