urlap.onsubmit = function() {
		if( jelszo1.value != jelszo2.value )
			{
				alert("A két jelszó nem egyezik meg.");
				return false;
			}
		}

 	neme = ["Férfi", "Nő", "Nem kívánja megadni"]
 	for(x of neme)
 	{
 		var l = document.createElement("LABEL");
 		l.innerText = x;
 		var i = document.createElement("INPUT");
 		i.type = "radio";
 		i.name ="nem";
 		i.value = neme.indexOf(x);
 		l.appendChild( i );
 		nemek.appendChild( l );
 		var br = document.createElement("BR");
 		nemek.appendChild( br );
 	}
