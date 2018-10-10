<h1> Инструкция по настройке рабочего пространства для комфортного обучения на курсе </h1>

Версия для пользователей Mac OS [здесь](https://github.com/korytoff/install-php-on-mac).

<h2>Подготовительные работы</h2>

<p>Для работы очень желательно иметь файловый менеджер, позволяющий создавать файлы с любыми расширениями, либо, что еще лучше, редактор кода, например <a href="https://atom.io/">Atom</a> или <a href="https://www.jetbrains.com/phpstorm/">PhpStorm</a>.</p>

<p>Структура папок может быть различной, однако данная инструкция написана под определенную структуру и, если ей следовать, всё гарантированно заработает.</p>
<p>Перед тем как начать, создайте на диске C папку server, внутри которой создайте 3 подпапки:  php, mysql, domains. Именно так. Без указания номеров версий.</p>
<p><img src="img/structura.png" alt=""></p>

<p>В каталоге domains создаем еще 2 папки: localhost и phpmyadmin</p>
<p><img src="img/structura_local.png" alt=""></p>
<p>Создаем индексные файлы (при помощи файлового менеджера или редактора кода), которые будут нужны для проверки того, что все работает и помещаем их в папку localhost:</p>
<ul>
    <li>index.html с содержимым: It works!</li>
    <img src="img/it_works.png" alt="">
    <li>index.php с содержимым:
        <?php phpinfo(); ?>
    </li>
    <img src="img/php_info.png" alt="">
</ul>
<p>Так же в папку host (C:\Windows\System32\drivers\etc), добавьте следующие строки (без знака <b>#</b>): <br>127.0.0.1 localhost <br>
127.0.0.1 phpmyadmin</p>
<p>В будущем, если вы решите создавать свои домены не забудте их прописать в файле host по аналогии.</p>

<h2> Установка PHP </h2>

<ol>
    <li>
        <p><a href="https://windows.php.net/download#php-7.2">Скачать</a> архив (Zip) <br> x86 — версия для 32-битной ОС, x64 — 64-битная версия. Из Thread Safe и Non Thread Safe выбираем Thread Safe (c поддержкой многопоточности). <br>
            <img src="img/inst_php.png" alt="" width="50%" height="80%"></p>
    </li>
    <li>Чтобы установить PHP, просто распакуй скачанный архив в папку php, C:\server\php <br><br>Как должно выглядеть: <br> <img src="img/php_on_C.png" alt="" width="50%" height="70%"></li>
</ol>

<h2>Настройка PHP</h2>

<p>Перейдем в c:/server/php и найдем файл php.ini (возможно у вас  их будет 2 и они будут с префиксами, тогда просто переимнуйте php.ini-development в php.ini)</p>
<p>Открывем его и нажимаем Ctrl+F, в строке поиска прописываем extension_dir</p>
<p><img src="img/con_php.png" width="50%" height="80%" alt=""></p>
<p>В строке  ;extension_dir = "ext" убираем ";", чтобы получилось как на скриншоте выше.(732 строка)</p>
<p>Далее в строке поиска прописываем "extension=mysqli" и так же убираем ";", чтобы получилось как на скриншоте снизу</p>
<p><img src="img/con_php2.png" width="50%" height="80%" alt=""></p>
<p>Сохраняем изменения и закрываем файл.</p>
<p>Так же нужно добавить папку с PHP в переменную окружения PATH. Для этого:</p>
<ul>
	<li>Открываем Панель управления->Система->Дополнительные параметры системы->Переменные среды</li>
	<p><img src="img/path_1.png" width="50%" height="60%" alt=""></p>
	<p><img src="img/path_2.png"  alt=""></p>
	<li>Выбираем переменную Path и нажимаем изменить</li>
	<p><img src="img/path_3.png"  alt=""></p>
	<li>Нажимаем создать и пишем путь к папке php</li>
	<p><img src="img/path_gif.gif"  alt=""></p>
</ul>

<h2>Запуск и остановка сервера.</h2>
<p>Для запуска наших скриптов будем использовать встроенный веб-сервер.</p>
<p>Откроем командную строку, для этого нажмите сочетание клавиш Windows + R и пропишите команду cmd</p>
<p>Чтобы запустить веб-сервер пропишем следующие команды:</p>
<ul>
	<li>
		<code>
			cd ../../../server/domains/localhost - переходим в папку с нашими скриптами
		</code>
	</li>
	<li>
		<code>
			php -S localhost:8000 - запускаем веб-сервер
		</code>
		<p>В консоли выведется: <br><img src="img/php_serv.png" alt=""></p>
	</li>
</ul>
<p>В браузере прописываем http://localhost:8000/index.php и если все сделали правильно, то вы увидите ваш скрипт, который  создали в самом начале<br><img src="img/php_serv_start.png" alt="" width="50%" height="80%"></p>
<p>Для остановки сервера нажмите сочетание клавиш Ctrl+C</p>


<h2> Установка MySQL </h2>
<ol>
    <li><p>Переходим на <a href="https://dev.mysql.com/downloads/mysql/">Официальный сайт MySQL</a> и скачиваем MySQLInstaller MSI </p></li>
    <img src="img/inst_mysql.png" alt="" width="50%" height="80%">
    <hr>
    <img src="img/inst_mysql2.png" width="50%" height="80%" alt="">
    <li>Запускаем установочный файл и выбираем пункт Custom</li>
    <img src="img/mysql_st1.png" alt="">
    <li>В следующем окне выбираем MySQL Server, а так же путь к папке mysql </li>
    <img src="img/mysql_st2.gif" width="50%" height="70%" alt="">
    <li>Далее игнорируем конфликт путей и проcто нажимаем Next</li>
    <img src="img/inst_mysql_conflict.png" width="50%" height="80%" alt="">
    <li>И выполняем установку</li>
    <p><img src="img/mysql_st3.png" alt=""></p>
    <p>Далее следует конфигурация нашего MySQL</p>
    <p>Все разделы оставляем по умолчанию кроме <b>Authentication Method и Accounts and Roles</b></p>
    <p>В первом случае выбираем второй пункт</p>
    <p><img src="img/mysql_st4.png"  width="50%" height="80%" alt=""></p>
    <p>В разделе <b>Accounts and Roles</b> нужно ввести пароль который нужно запомнить! В последующем он нам понадобится для входа в phpmyadmin</p>
    <p><img src="img/mysql_pass.png" alt=""></p>
    <p>В конце конфигурирования должно быть так:</p>
    <p><img src="img/mysql_finish.png"  alt="finish"></p>
</ol>
<p>На этом с установкой все.</p>

<h2>Установка Phpmyadmin</h2>
<p>Переходим на <a href="https://php-myadmin.ru/download/">сайт</a> и скачиваем архив.</p>
<p><img src="img/inst_pma.png"  width="50%" height="80%" alt=""></p>
<p>Файлы из архива распакуем в папку phpmyadmin (c:/server/domains/phpmyadmin)</p>
<p><img src="img/inst_pma2.png"  width="50%" height="80%" alt=""></p>
<p>Логин для входа - root <br>Пароль - тот который указали при установке MySQL</p>



<p>Чтобы запустить Phpmyadmin нужо:</p>
<ul>
	<li>
		Перейти в папку где у нас лежит pma
		<p><code>cd../phpmyadmin</code></p>
	</li>
	<li>
		<p>Запустить веб-сервр и ввести адрес в браузер, как это описано выше.</p>
	</li>
</ul>
