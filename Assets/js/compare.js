
function selectProduct1() {

    document.getElementById("product1").style.opacity = 1;

    var product = document.getElementById("first").value;
    if (product == "val1") {
        document.getElementById("image").src = "Assets/images/mobile images/iphone-14-pro.jpg";
        document.getElementById("model").innerHTML = "Iphone 14 Pro";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> Up to 2 hours longer battery life than iPhone 13 Pro Max</li>";

    }
    else if (product == "val2") {
        document.getElementById("image").src = "Assets/images/mobile images/samsung-22-ul.jpg";
        document.getElementById("model").innerHTML = "Samsung S22 Ultra";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 4500 mah</li>";

    }
    else if (product == "val3") {
        document.getElementById("image").src = "Assets/images/mobile images/Oppo-Reno-5.png";
        document.getElementById("model").innerHTML = "Oppo Reno 5";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val4") {
        document.getElementById("image").src = "Assets/images/mobile images/ipad-9.png";
        document.getElementById("model").innerHTML = "Ipad 9th Generation";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val5") {
        document.getElementById("image").src = "Assets/images/mobile images/xiaomi-pad-5.jpg";
        document.getElementById("model").innerHTML = "Xiaomi Tab 5";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val6") {
        document.getElementById("image").src = "Assets/images/mobile images/samsung-tab-a8.jpg";
        document.getElementById("model").innerHTML = "Samsung Galaxy Tab A8 LTE";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val7") {
        document.getElementById("image").src = "Assets/images/mobile images/Jazz-Digit-4G-Elite-3.jpg";
        document.getElementById("model").innerHTML = "Jazz Digit 4G";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val8") {
        document.getElementById("image").src = "Assets/images/mobile images/Nokia-3310-4G.jpg";
        document.getElementById("model").innerHTML = "Nokia 3310 4G";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val9") {
        document.getElementById("image").src = "Assets/images/mobile images/Nokia-5310.jpg";
        document.getElementById("model").innerHTML = "Nokia 5310 (2020)";
        document.getElementById("features").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else {
        document.getElementById("product1").style.opacity = 0;
    }
}


function selectProduct2() {

    document.getElementById("product2").style.opacity = 1;

    var product = document.getElementById("second").value;
    if (product == "val1") {
        document.getElementById("image2").src = "Assets/images/mobile images/iphone-14-pro.jpg";
        document.getElementById("model2").innerHTML = "Iphone 14 Pro";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> Up to 2 hours longer battery life than iPhone 13 Pro Max</li>";

    }
    else if (product == "val2") {
        document.getElementById("image2").src = "Assets/images/mobile images/samsung-22-ul.jpg";
        document.getElementById("model2").innerHTML = "Samsung S22 Ultra";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 4500 mah</li>";

    }
    else if (product == "val3") {
        document.getElementById("image2").src = "Assets/images/mobile images/Oppo-Reno-5.png";
        document.getElementById("model2").innerHTML = "Oppo Reno 5";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val4") {
        document.getElementById("image2").src = "Assets/images/mobile images/ipad-9.png";
        document.getElementById("model2").innerHTML = "Ipad 9th Generation";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val5") {
        document.getElementById("image2").src = "Assets/images/mobile images/xiaomi-pad-5.jpg";
        document.getElementById("model2").innerHTML = "Xiaomi Tab 5";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val6") {
        document.getElementById("image2").src = "Assets/images/mobile images/samsung-tab-a8.jpg";
        document.getElementById("model2").innerHTML = "Samsung Galaxy Tab A8 LTE";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val7") {
        document.getElementById("image2").src = "Assets/images/mobile images/Jazz-Digit-4G-Elite-3.jpg";
        document.getElementById("model2").innerHTML = "Jazz Digit 4G";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val8") {
        document.getElementById("image2").src = "Assets/images/mobile images/Nokia-3310-4G.jpg";
        document.getElementById("model2").innerHTML = "Nokia 3310 4G";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val9") {
        document.getElementById("image2").src = "Assets/images/mobile images/Nokia-5310.jpg";
        document.getElementById("model2").innerHTML = "Nokia 5310 (2020)";
        document.getElementById("features2").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else {
        document.getElementById("product1").style.opacity = 0;
    }
}

function selectProduct3() {
        
    document.getElementById("product3").style.opacity = 1;

    var product = document.getElementById("third").value;
    if (product == "val1") {
        document.getElementById("image3").src = "Assets/images/mobile images/iphone-14-pro.jpg";
        document.getElementById("model3").innerHTML = "Iphone 14 Pro";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> Up to 2 hours longer battery life than iPhone 13 Pro Max</li>";

    }
    else if (product == "val2") {
        document.getElementById("image3").src = "Assets/images/mobile images/samsung-22-ul.jpg";
        document.getElementById("model3").innerHTML = "Samsung S22 Ultra";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 4500 mah</li>";

    }
    else if (product == "val3") {
        document.getElementById("image3").src = "Assets/images/mobile images/Oppo-Reno-5.png";
        document.getElementById("model3").innerHTML = "Oppo Reno 5";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val4") {
        document.getElementById("image3").src = "Assets/images/mobile images/ipad-9.png";
        document.getElementById("model3").innerHTML = "Ipad 9th Generation";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val5") {
        document.getElementById("image3").src = "Assets/images/mobile images/xiaomi-pad-5.jpg";
        document.getElementById("model3").innerHTML = "Xiaomi Tab 5";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val6") {
        document.getElementById("image3").src = "Assets/images/mobile images/samsung-tab-a8.jpg";
        document.getElementById("model3").innerHTML = "Samsung Galaxy Tab A8 LTE";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 6.7-inch Super Retina XDR display with ProMotion technology</li> <li><strong>Processor :</strong> A18 Bionic chip with 5-nanometer process technology</li> <li><strong><strong>RAM :</strong> 8GB</li> <li><strong>Storage :</strong> 128GB, 256GB, 512GB, or 1TB</li> <li><strong>Camera :</strong> Triple 12MP camera system with 4x optical zoom and LiDAR scanner</li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val7") {
        document.getElementById("image3").src = "Assets/images/mobile images/Jazz-Digit-4G-Elite-3.jpg";
        document.getElementById("model3").innerHTML = "Jazz Digit 4G";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val8") {
        document.getElementById("image3").src = "Assets/images/mobile images/Nokia-3310-4G.jpg";
        document.getElementById("model3").innerHTML = "Nokia 3310 4G";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else if (product == "val9") {
        document.getElementById("image3").src = "Assets/images/mobile images/Nokia-5310.jpg";
        document.getElementById("model3").innerHTML = "Nokia 5310 (2020)";
        document.getElementById("features3").innerHTML = "<li><strong>Display :</strong> 4.5-inch display</li> <li><strong>Processor :</strong> UniSOC T1625</li> <li><strong>RAM :</strong> 2GB</li> <li><strong>Storage :</strong> 16GB, 32GB</li> <li><strong>Camera :</strong> 12MP camera </li> <li><strong>Battery :</strong> 5000 mah</li>";

    }
    else {
        document.getElementById("product1").style.opacity = 0;
    }
}
