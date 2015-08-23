
<html>
    <head>
    <meta http-equiv="content-type" content="text/html" charset="utf-8" />
    <title>Calm breeze login screen</title>
    <link rel="stylesheet" href="CSS/LoginFormstyle.css">
    </head>
    <body>
        <?php
        //$log = new Monolog\Logger('name');
        //$log->pushHandler(new Monolog\Handler\StreamHandler('app.log', Monolog\Logger::WARNING));
        //$log->addWarning('Foo');
        require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
        session_start();
        if(!(empty($_POST['userName'])||empty($_POST['password']))){
        $_SESSION['userName']=$_POST['userName'];
        require_once $_SERVER['DOCUMENT_ROOT'].'/world/controller/Control.php';
        Control::authorization($_POST["userName"], $_POST["password"]);
        }else{
        }
          ?>
    <div class="wrapper">
	<div class="container">
		<h1>Welcome</h1>
                <form class="form" method="post" action="?">
                    <input type="text" placeholder="Name" name="userName">
                    <input type="password" placeholder="password" name="password">
                    <button type="submit" id="login-button">Login</button>
		</form>
                
	</div>
    </div>
       
    </body>
</html>
