
          // Script ejecutado inmediatamente
          (function() {
            var dateElement = document.getElementById('date-display');
            if (!dateElement) return;
            
            var months = [
              "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
              "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            
            var now = new Date();
            var day = now.getDate();
            var month = months[now.getMonth()];
            var year = now.getFullYear();
            
            dateElement.innerHTML = month + " " + day + ", " + year;
          })();
        