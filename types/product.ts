


export interface Product{
     name:string;
     _id: string;
     _type:"product";
     image:{
      asset:{
          _ref:string;
          _type:"image";
      }
      };
      price:number;
      description?:string;
      // discountPercentage:number;
      slug:{
          _type:"slug";
          current:string;
      };
      stockLevel:number;
     }