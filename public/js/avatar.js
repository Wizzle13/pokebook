var sprite = 999;
function sprite1() {

    const sprite = document.querySelector('.pokemonSprite1').value.trim();
    console.log("sprite ID:" + sprite )
    spriteHandler(sprite);

}
function sprite2() {

    const sprite = document.querySelector('.pokemonSprite2').value.trim();
    console.log("sprite ID:" + sprite )
    spriteHandler(sprite);
}
function sprite3() {

    const sprite = document.querySelector('.pokemonSprite3').value.trim();
    console.log("sprite ID:" + sprite )

    spriteHandler(sprite);

}

async function spriteHandler(sprite) { 
    console.log("sprite ID:" + sprite )
      if (sprite) {
          const response = await fetch('/api/users/', {
            method: 'put',
            body: JSON.stringify({
              sprite
            }),
            headers: { 'Content-Type': 'application/json' }
          });
        //    check the response status
          if (response.ok) {
            document.location.replace('/profile');
            
          } else {
            
             alert(response.statusText);
             
          }
      };
  };

document.querySelector('#pokemonSprite1').addEventListener('click', sprite1);
document.querySelector('#pokemonSprite2').addEventListener('click', sprite2);
document.querySelector('#pokemonSprite3').addEventListener('click', sprite3);