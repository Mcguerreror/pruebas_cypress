

describe("ERP_EACP_TEST", () => {
 
  it("tests ERP_EACP_TEST", () => {
    cy.wait(4000);
    cy.viewport(734, 597);
    cy.visit("http://10.109.9.15/erpappheonmain/#!/login?back_url=%2Ftransaction%2FfrmTgTra%3Fide_doc%3DEACP%26ide_tra%3Dfa3625b0-d402-4f28-87df-44aea853ecc9");
 // LOGIN
    cy.get("#content div:nth-of-type(2) > input").click();
    cy.get("#content div:nth-of-type(2) > input").type("heon");
    cy.get("#content div:nth-of-type(3) > input").click();
    cy.get("#content div:nth-of-type(3) > input").type("mcguerreror");
    cy.get("div:nth-of-type(4) > input").click();
    cy.get("div:nth-of-type(4) > input").type("Mcgr+2023+");
    cy.get("#content-partial button").click();  // HOME
// INGRESO APLICACION  
    cy.wait(2000);
    cy.get('[ng-click="hideMenu();plusMenuSlice()"] > a > .fa').dblclick();
    cy.get('[ng-click="hideMenu();plusMenuSlice()"] > a > .fa').click();
    cy.get(".680").click({force: true});
    cy.get('[for="683"]').click({force: true} ); ///Transacciones
    cy.get('[for="802"]').click({force: true} ); //Almacen
    cy.get('[for="803"]').click({force: true} ); //ENTRADA
//Demo Entrada Almacen
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(3) > :nth-child(1) > [ng-if="subM2.url == null && subM2.subMenu.length >= 1"] > ol > :nth-child(8) > .file > .ng-binding').click({force: true});  
//ingreso al formulario
    cy.wait(10000);
    cy.get('#head > div:nth-child(1) > button:nth-child(1)').click({force: true}); 
    cy.wait(2000);
    cy.get('#ide_doc_obl').type(1); //id
    cy.get('#num_doc_obl').type(121345);
    cy.get("#FrmtgtraPartialCtrl > div:nth-child(4) > div > div.row > div:nth-child(10) > div > span.input-group-addon.lateralDer").click(); //referncia
    cy.wait(3000);
    cy.xpath("/html/body/div[5]/div/div/div/div[1]/div/div/div/div[2]/div[3]/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div/div[1]/div").click({force:true});
// Detalle
    cy.get("#content-top-directives div:nth-of-type(1) > button:nth-of-type(2) > i").click();  //cargando pagina
    cy.wait(5000);
    cy.get('[ng-click="sdb.save();cerrarTour()"] > .fa').scrollIntoView().should('be.visible').click();
    cy.wait(50000);
    cy.get('[ng-click="sdb.edit();cerrarTour()"] > i').scrollIntoView().should('be.visible').click();
 //guardar
    cy.get('.pos-ico-right > [title="Adiciona un elemento nuevo a la grilla"]').click(); //+ adicion grilla
    cy.wait(2000);
    cy.get('div.ui-grid-cell-contents.ng-binding.ng-scope').should('be.visible').contains('1') // Verifica que el contenido del elemento coincida con '1'
    cy.xpath("/html/body/div[5]/div/div/div/div[4]/div[2]/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/div/div[3]/div").click();
    cy.wait(5000);
    cy.get('[ng-click="sdb.F7();cerrarTour()"] > .fa').click(); //bodega
    cy.contains('div.ui-grid-cell-contents', '10').click();
    cy.wait(3000);
    cy.focused().tab() //
    // //item
    // cy.xpath("/html/body/div[5]/div/div/div/div[4]/div[2]/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/div/div[4]").click();
    cy.get('[ng-click="sdb.F7();cerrarTour()"] > .fa').click(); //Buscar
    cy.wait(10000);
    cy.contains('div.ui-grid-cell-contents', '10.0').click(); // sellecion item
    cy.focused().tab() //
    cy.wait(1000);
    cy.xpath("/html/body/div[5]/div/div/div/div[4]/div[2]/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/div/div[6]/div").click(); //cum
    cy.get('[ng-click="sdb.F7();cerrarTour()"] > .fa').dblclick(); // buscar
    cy.contains('div.ui-grid-cell-contents', '1').click();  ///numero cum
    cy.wait(2000);
    cy.focused().tab() //
    cy.wait(4000);
    cy.xpath("/html/body/div[5]/div/div/div/div[4]/div[2]/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/div/div[7]/div").type(2) //cantidad
    cy.wait(3000);
    for (let i = 0; i <4;i++){cy.focused().tab();}
   cy.get('[ng-show="verDetalles"] > :nth-child(1) > .nav > :nth-child(2) > a').click();
   cy.wait(3000);
   cy.xpath("/html/body/div[5]/div/div/div/div[4]/div[7]/div/div[1]/div[2]/div/div[1]/div[3]/div[2]/div/div/div/div[4]/div").type("12334"); //lote
    cy.focused().tab() //
    cy.wait(10000);
    cy.xpath("/html/body/div[5]/div/div/div/div[4]/div[7]/div/div[1]/div[2]/div/div[1]/div[3]/div[2]/div/div/div/div[5]/div").type("2024-01-10"); //fecha vencimiento
    cy.focused().tab() //
    cy.wait(3000);
    cy.xpath("/html/body/div[5]/div/div/div/div[4]/div[7]/div/div[1]/div[2]/div/div[1]/div[3]/div[2]/div/div/div/div[6]").type("reg1234");
    cy.wait(4000);
    cy.get('[ng-click="sdb.save();cerrarTour()"]').click(); //Guardar
    cy.wait(4000);
    cy.get('[ng-click="sdb.inputar();cerrarTour()"] > .fa').click();
    }
   )
  });
