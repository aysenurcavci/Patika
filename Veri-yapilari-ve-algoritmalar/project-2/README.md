<h1 align="center">Merge Sort Project</h1>

[16,21,11,8,12,22] dizisinin merge sort türüne göre aşamaları 

    1) [16,21,11,8,12,22] dizisini ikiye bölelim.

    2) [16,21,11] ve [8,12,22] olarak iki dizi oluşur.

    3) [16,21] - [11] ve [8,12] - [22] olarak tekrar bölelim.

    4) [16]-[21]-[11]-[8]-[12]-[22] tek veri kalana kadar bölünmüş olur.

    5) tek kalan verileri küçükten büyüğe kendi dizileri içinde birleştirelim: [16,21]-[11]-[8,12]-[22] => [11,16,21] - [8,12,22]

    6) son kalan iki dizi yine aynı şekilde sıralanır. [8,11,12,16,21,22]

    Big-O gösterimi

        O(nLogn) 