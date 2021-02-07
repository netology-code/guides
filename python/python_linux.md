**Устанавливаем и настраиваем Python в Linux, получаем доступ к интерпретатору из командной строки.**

**0.	Подготовка.**

Скорее всего, python уже установлен, но не самая актуальная версия.
Открываем терминал, нажав сочетание клавиш
*CTRL+ALT+T*.

Набираем:

*sudo apt-get update*

*sudo apt-get upgrade python3*

*python3*

Должна появиться информация о версии python и приглашение для ввода.

![](https://github.com/AlyonaZh/guides/blob/master/python/pics/linux/python_info.jpg?raw=true)

Установлен Python 3.6.7, актуальная версия Python 3.7.2.

Выполняем:

*sudo apt-get install python3.7*

Запускаем:

*python3.7*

Инструкция ниже нужна, если необходимо установить python из исходников.

**1.	Установка Python.**

Заходим на официальный сайт в раздел загрузок [](https://www.python.org/downloads/), далее выбираем последнюю версию.

![](https://github.com/AlyonaZh/guides/blob/master/python/pics/linux/instalation.jpg?raw=true)

Пролистываем открывшуюся страницу до конца. И выбираем Gzipped source *tarball*.

![](https://github.com/AlyonaZh/guides/blob/master/python/pics/linux/gzipped_source_toolbar.jpg?raw=true)

Извлекаем скачанный архив через GUI или командой в терминале:
*tar -zxvf ~/Загрузки/Python-3.7.2.tgz*

Установим зависимости:

*sudo apt-get install build-essential python-dev python-setuptools python-pip python-smbus*

*sudo apt-get install libncursesw5-dev libgdbm-dev libc6-dev*

*sudo apt-get install zlib1g-dev libsqlite3-dev tk-dev*

*sudo apt-get install libssl-dev openssl*

*sudo apt-get install libffi-dev*

Переходим в папку:

*cd ~/Python-3.7.2*

Выполняем:

 *./configure*
*sudo make altinstall*

**2.	Запускаем интерпретатор из командной строки:**

*CTRL — ALT — T*

*python3.7*

![](https://github.com/AlyonaZh/guides/blob/master/python/pics/linux/launch.jpg?raw=true)
