 function draw() {
        var canvas = document.getElementById('creativeCoding');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          
          ctx.fillStyle = 'rgba(255, 0, 255, 0.5)';
           ctx.fillRect(30, 30, 50, 50);
          
            ctx.beginPath();       // Start a new path
          ctx.moveTo(30, 50);     // Move the pen to ( 30, 50 )
          ctx.lineTo(300, 50);   // Draw a line to (150, 100)
          ctx.stroke();          // Render the path
