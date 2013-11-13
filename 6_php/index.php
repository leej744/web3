<?php
	if (isset($_POST['username']) && isset($_POST['password'])){
		if($_POST['username']=='julie' && $_POST['password']=='julie'){}
		$result ="logged in";

 		echo "Welcome $username";
 ?>
	}
	}else{
		$result="stop";
	}
?>

<!doctype>
<html>
	<head>
		<title>post</title>
	</head>

	<body>
		<form method="post" action="signin.php"></form>
			<input type ="text" name="username" placeholder="username"/><br/>
			<input type ="text" name="username" placeholder="username"/><br/>

		</form>
			<input type="submit">
			<input type="reset" >	
	</body>

</html>