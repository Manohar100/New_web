document.getElementById('loadButton').addEventListener('click', function() {

    this.style.display = 'none';
    
  
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    
    
    setTimeout(function() {
        loader.style.display = 'none';
        const message = document.getElementById('message');
        message.style.display = 'block';
        message.textContent = 'Bhagg Bhosdike ';
    }, 5000);
});
