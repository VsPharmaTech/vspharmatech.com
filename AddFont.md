steps to add new font:
1. Download font from [fontsource](https://fontsource.org)
- For that, you will need to run following command 
```npm install @fontsource-variable/font_name``` 
2. Add imports to the Layout.astro file. 
ex. ```import '@fontsource-variable/font_name';```
3. Create its style variable in global.css inside @theme{ }
ex. 
``` 
@theme {
      --font-roboto: "Roboto", "sans";
      --font-raleway: "Raleway Variable", "sans";
      --font-var: "Var", "fall-back font";
    }    
```


Use
ex. 
``` <h1 class="text-3xl mt-20 font-bold font-lora">VS Pharma Tech for font check</h1> ```