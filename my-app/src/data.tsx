export class Product {

   private productName:string;
   private productCode:number;
   private productCategory:number;
   private productPrice:number;
   private productUnits:number;
   private picture:string;

    constructor(productName:string, productCode:number, productCategory:number, productPrice:number, productUnits:number, picture:string) {
        this.productName = productName;
        this.productCode = productCode;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
        this.productUnits = productUnits;
        this.picture = picture;
    }


    public get getProductName ():string { return this.productName };
    public get getProductCode ():number { return this.productCode };
    public get getProductCategory ():number { return this.productCategory };
    public get getProductPrice ():number { return this.productPrice };
    public get getProductUnits ():number { return this.productUnits };
    public get getPicture ():string { return this.picture };

    
    public set setproductName(productName:string) {
        this.productName = productName;
    }

    public set setProductPrice(productPrice:number) {
        this.productPrice = productPrice;
    }
    
    public set setProductUnits(productUnits:number) {
        this.productUnits = productUnits;
    }
}


export class ProductsList {

   private productsList:Array<Product>=[];

   // constructor() { }

    public get getProductsList():Array<Product> { return this.productsList }

    addProduct(name:string, code:number, cat:number, price:number, unit:number, pic:string) {
        debugger
        let newProd = new Product(name, code, cat, price, unit, pic)
        debugger
        this.productsList.push(newProd);
        debugger
    }

    updateProduct(name:string, code:number, cat:number, price:number, unit:number) {
        const index = this.productsList.findIndex(x => x.getProductCode == code)
        this.productsList[index].setproductName = name;
        this.productsList[index].setProductPrice = price;
        this.productsList[index].setProductUnits = unit;
    }

    deleteProduct(codeProd:number) {
        debugger
        const index = this.productsList.findIndex(x => x.getProductCode == codeProd)
        debugger
        const pro = this.productsList.splice(index, 1)
        debugger
    }

    getProductByName(name:string) {
        const pro = this.productsList.find(x => x.getProductName == name);
    }

    getProductsByPriceRange(numMin:number, numMax:number) {
        const pro = this.productsList.filter(x => x.getProductPrice >= numMin && x.getProductPrice <= numMax)
    }

    getProductsByCodeCategory(codeCategory:string) {
        debugger
        const pro = this.productsList.filter(x => x.getProductCategory ==parseInt(codeCategory))
    }
    OutOfStockProductsfun() {
        const pro = this.productsList.filter(x => x.getProductUnits < 3)
    }
}

export class Category {
    private nameCategory:string;
    private codeCategory:number;

    constructor(nameCategory:string, codeCategory:number) {
        this.nameCategory = nameCategory;
        this.codeCategory = codeCategory;
    }

    public get getNameCategory ():string { return this.nameCategory };
    public get getCodeCategory ():number { return this.codeCategory };
    public set setNameCategory (name:string) {this.nameCategory=name};

}

export class CategoryList {
 
    private categories:Array<Category> = [];

   // constructor() { }

    public get getCategories():Array<Category> { return this.categories }

    addCategory = (nameCategory:string,codeCategory:number ) => {
        let newCategory = new Category(nameCategory,codeCategory)
        this.categories.push(newCategory);
    }

}

export class Manager {
    private codeManager:number;
    private nameManager:string;

    constructor(code:number, name:string) {
        this.codeManager = code;
        this.nameManager = name;
    }
    
    public get getCodeManager() { return this.codeManager }
    public get getNameManager() { return this.nameManager }
}

//=================================
//
//=================================
 const productsList = new ProductsList();
  
    productsList.addProduct("German Side Flute", 1, 4, 1240, 12, "picturs/Germansideflute.jpg");
    productsList.addProduct("Organic", 2, 1, 3240,40, "picturs/Organic.jpg");
    productsList.addProduct("Germany Violin", 3, 3, 8240, 3, "picturs/Germanviolin.jpg");
    productsList.addProduct("Alone Drum", 4, 2, 210, 23, "picturs/Alonedrum.jpg");
    productsList.addProduct("Electric Piano", 5, 1, 7929, 14, "picturs/Electricpiano.jpg");
    productsList.addProduct("Ancient Manual Cymbals", 6, 2, 2000, 12, "picturs/Ancientmanualcymbals.jpg"); 
    productsList.addProduct("German Drumset", 7, 2, 9700, 40, "picturs/Germandrumset.jpg");
    productsList.addProduct("Darbuka", 8, 2, 67, 23, "picturs/Darbuka.jpg");
    productsList.addProduct("Cymbals Pillar", 9, 2, 990, 88, "picturs/CymbalsPillar.jpg");
    productsList.addProduct("Clarinet", 10, 4, 2400, 70, "picturs/Clarinet.jpg");
    productsList.addProduct("Manual Cymbals", 11, 2, 3200, 1, "picturs/Manualcymbals.jpg");
    productsList.addProduct("ancient Villain", 12, 3, 6740, 70, "picturs/ancientvillain.jpg");
    productsList.addProduct("Bells", 13, 2, 1240, 70, "picturs/Bells.jpg");
    productsList.addProduct("Ancient Drumset", 14, 2, 2400, 70, "picturs/Ancientdrumset.jpg");
    productsList.addProduct("Grand Piano", 15, 1, 1120, 3, "picturs/Grandpiano.jpg");
    productsList.addProduct("Saxophone", 16, 4, 7840, 10, "picturs/saxophone.jpg");
    productsList.addProduct("Wooden Gitar", 17, 3, 899, 88, "picturs/Woodenguitar.jpg");
    productsList.addProduct("Shaped Villain", 18, 3, 2220, 70, "picturs/Shapedvillain.jpg");
    productsList.addProduct("gold Vilion", 19, 3, 1999, 88, "picturs/goldvilion.jpg");
    productsList.addProduct("Trombone", 20, 4, 2403, 70, "picturs/trombone.jpg");
    productsList.addProduct("Designed Guitar", 21, 3, 240, 70, "picturs/Designedguitar.jpg");
    productsList.addProduct("In Novative Drumset", 22, 2, 3539, 15, "picturs/Innovativedrumset.jpg");
    productsList.addProduct("Contra Bass", 23, 3, 3399, 88, "picturs/ContraBass.jpg");
    productsList.addProduct("Cello", 24, 3, 240, 70, "picturs/cello.jpg");
    productsList.addProduct("Rose Gold Cymbals", 25, 2, 70242, 13, "picturs/RoseGoldcymbals.jpg");
    productsList.addProduct("Ancient Violin", 26, 3, 7854, 88, "picturs/ancientviolin.jpg");
    productsList.addProduct("Wooden Harmonica", 27, 4, 14356, 70, "picturs/Woodenharmonica.jpg");
    productsList.addProduct("Piano", 28, 1, 10009, 90, "picturs/piano.jpg");
    productsList.addProduct("Wooden Flute", 29, 4, 350, 70, "picturs/Woodenflute.jpg");
    productsList.addProduct("Trumpet", 30, 4, 1240, 70, "picturs/trumpet.jpg");
    productsList.addProduct("Mandoline",31, 3, 2240, 70, "picturs/mandoline.jpg");
 
  
//const managers = new Manager(1234, "chani")


const categoriesList = new CategoryList()
categoriesList.addCategory("Keyboards", 1)
categoriesList.addCategory("percussions", 2)
categoriesList.addCategory("string instrument", 3)
categoriesList.addCategory("Wind Instruments", 4)

export  {categoriesList};
export {productsList} ;