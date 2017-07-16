---
title: Любими филми
---
{% assign movies_sorted_by_year_and_name = site.data.movies | sort:"name" | sort:"year" | reverse %}
{% assign sorted_movies = movies_sorted_by_year_and_name | sort:"rating" | reverse %}
{% for movie in sorted_movies %}
  {% if movie.watched == true }
    [{{ movie.name }} ({{ movie.year }})](http://www.imdb.com/title/tt{{ movie.imdb_id }})
  {% endif %}
{% endfor %}
