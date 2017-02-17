---
layout: post
title: Как редактирам видеата, които качвам в този възел
---
Използвам командната програма ffmpeg

Изрязване:
ffmpeg -i [име на файла на входа] -ss [начало] -to [край] [име на файла на изхода]

Избиране на пътечки за звука и картината:
ffmpeg -i ./Scent.of.a.Woman.1992.BDRip.x264-WAR.mkv -map 0:0 -map 0:2 -ss 01:21:45 -to 01:27:24 cut.mkv

ffmpeg -i [име на файла на входа] -map [номер на пътечката за картина] -map [номер на пътечката за звук] -ss [начало] -to [край] [име на файла на изхода]

Пример:
ffmpeg -i ./scent_of_a_woman_1992_original.mkv -map 0:0 -map 0:2 -ss 01:23:08 -to 01:27:23 scent_of_a_woman_1992.mkv


Преобразуване:
ffmpeg2theora scent_of_a_woman_1992.mkv
