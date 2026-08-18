with open('pdf/vidhiyen-586-content.html', 'r', encoding='utf-8') as f:
    content = f.read()

snippet = '''    {
      id: 'story-vidhiyen-586',
      title: 'விதி எண் "586"',
      category: 'Tamil Short Story',
      readTime: '15 min read',
      date: 'August 2026',
      excerpt: 'வேகமாக சென்ற லாரியின் காற்றால் பறந்த ஒரு தேநீர் கடையின் பில்... அதில் எழுதப்பட்ட '586' என்ற மர்ம எண்... இரு லட்சம் ரூபாய் கொள்ளையும், அதைத் தொடர்ந்து நடக்கும் திருப்பங்களும், மனித மனங்களின் பேராசையையும் விதியின் சுழலையும் வெளிச்சமிட்டுக் காட்டும் விறுவிறுப்பான மர்ம சிறுகதை.',
      content: `\n''' + content + '''\n      `
    }'''

with open('pdf/story-snippet.js', 'w', encoding='utf-8') as f:
    f.write(snippet)

print('Done')
