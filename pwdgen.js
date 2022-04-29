
			
	var password = document.getElementById("password")

		function generatePwd(){
			var chars = "0123456789abcdefghijklmnoprstuvwxyz!£@()/><.*ABCDEFGHIJKLMNOPRSTUVWXYZ";
			var passwordLen = 16;
			var password = "";

				for (var i=0; i <= passwordLen; i++){
					var random = Math.floor(Math.random() * chars.length);
					password += chars.substring(random, random +1);
				}

					document.getElementById("password").value = password;
		}

				
		function copyPwd(){
			var copyText = document.getElementById("password");
				copyText.select();
				copyText.setSelectionRange(0,999);
				document.execCommand("copy");
				alert("Password copied to clipboard");
		}

