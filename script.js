function tellStory(){
    const nameInput = $('#nameInput').val();
    const charInput = $('#charInput').val();
    const adverbInput = $('#adverbInput').val();
    const adjectiveInput = $('#adjectiveInput').val();
    

    $('#story').css('visibility', 'visible');
    $('#story').html(`One day, my friend <span style="color:green"> ${nameInput} </span> 
    was visiting New York and ran 
    into <span style="color:green"> ${charInput} </span>. 
    <span style="color:green"> ${nameInput} </span>
    ran <span style="color:green"> ${adverbInput} </span> 
    to meet <span style="color:green"> ${charInput} </span>. But
    <span style="color:green"> ${charInput} </span> turned out to be very 
    <span style="color:green"> ${adjectiveInput} </span> and 
    <span style="color:green"> ${nameInput} </span> did not enjoy meeting. `)
}

function calculateImageSize(){
    const ImageWidth = parseInt($('#ImageWidth').val()) || null;
    const ImageHeight = parseInt($('#ImageHeight').val()) || null;
    const ImageColors = parseInt($('#ImageColors').val()) || null;

    const bit_depth = Math.ceil(Math.log(ImageColors)/Math.log(2));
    const pix = ImageHeight * ImageWidth;
    let bytes = pix * bit_depth / 8;
    bytes = Math.round((bytes/1024)*10)/10;
    
    $('#story').css('visibility', 'visible');

    if(bytes == Math.round(bytes)){
        bytes = bytes + '.0'
    } 

    if (ImageWidth==null || ImageHeight==null || ImageColors==null){
        $('#story').html(`<span style="color:red"> Please insert correct values! </span>`)
    } else if (parseInt(bytes) > 50){
        $('#story').html(`<span style="color:red">File is ${bytes}KB which is FAIL </span>`)
    } else {
        $('#story').html(`<span style="color:green">File is ${bytes}KB which is ok </span>`)
    }
}