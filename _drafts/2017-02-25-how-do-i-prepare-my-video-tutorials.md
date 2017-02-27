layout: post
title: Как записвам видео уроците си
---
Използвам командната програма ffmpeg

- запис на звук в суров формат
ffmpeg -f alsa -i hw:0 -codec:a pcm_s16le out.mka

- запис на картина в суров формат
ffmpeg -video_size 1920x1080 -framerate 30 -f x11grab -i $DISPLAY -codec:v libx264 -qp 0 -preset ultrafast capture.mkv

- запис на звук и картина в суров формат
ffmpeg -video_size 1920x1080 -framerate 30 -f x11grab -i $DISPLAY -f alsa -i hw:0 -codec:v libx264 -codec:a pcm_s16le -qp 0 -preset ultrafast capture.mkv

- преобразуване
ffmpeg -i output.flv -acodec ... -vcodec ... final.mkv

Разшифровано:
-f > format > Наложи определен файлов формат. Обикновено се определя автоматично за входящи файлове и се познава по файловото разширение за изходящи файлове, така че този параметър не е необходим в повечето случаи.
- i > input file url
-qp 0 tells x264 to encode in lossless mode, -preset ultrafast advises it to do so fast.


Източник:
http://trac.ffmpeg.org/wiki/Capture/Desktop
