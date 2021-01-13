async function fetchpic (filename) {
    console.log('about to fetch picture');
    const file = await fetch(filename);
    const blob = await file.blob();
    //document.getElementById('space').src = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    img.width = 200;
    img.style = 'block';
    document.body.append(img);
}
fetchpic("apod.jpg");
/*var array = ["apod.jpg","rainbow.jpg"]
for (let index = 0; index < array.length; index++) {
    fetchpic(array[index]).catch(error => {
        console.log('error');
        console.error();
    });
}*/
