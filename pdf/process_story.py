import re

with open('pdf/vidhiyen-586.txt', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('\f', ' ')
lines = text.splitlines()

cleaned_lines = []
for line in lines:
    stripped = line.strip()
    if re.match(r'^\d+$', stripped):
        continue
    cleaned_lines.append(line)

text = '\n'.join(cleaned_lines)
text = re.sub(r'\n{3,}', '\n\n', text)
paragraphs = [p.strip() for p in text.split('\n\n') if p.strip()]

html_paragraphs = '\n'.join([f'<p>{p}</p>' for p in paragraphs])

title = 'விதி எண் "586"'
author = 'மணிகண்டன். பெ'

content = f'''<h4 class="font-serif mb-4 text-center">{title}</h4>
<p class="lead italic text-center mb-5 text-muted">எழுத்து : {author}</p>
{html_paragraphs}'''

content = content.replace('`', '\\`')

with open('pdf/vidhiyen-586-content.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
