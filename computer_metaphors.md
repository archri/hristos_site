---
layout: post
title: Компютърни метафори
---
{% for metaphor in site.computer_metaphors %}
  [{{ metaphor.title }}]({{ site.baseurl }}{{ metaphor.url }})  
{% endfor %}
