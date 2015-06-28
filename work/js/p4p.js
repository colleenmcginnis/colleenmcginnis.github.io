
        function fade(btnElement) {
            if (btnElement.value === "Back to Status Quo") {
                document.getElementById("myImg").className = "fade-out";
 				document.getElementById("myImg2").className = "fade-in";
 				document.getElementById("myTxt1").className = "fade-in";
                document.getElementById("myTxt2").className = "fade-out";

                btnElement.value = "See New Approach";

            }
        else {
                document.getElementById("myImg").className = "fade-in";
				document.getElementById("myImg2").className = "fade-out";
				document.getElementById("myTxt1").className = "fade-out";
                document.getElementById("myTxt2").className = "fade-in";

                btnElement.value = "Back to Status Quo";

            }
        }

