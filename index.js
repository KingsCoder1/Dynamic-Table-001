//Get the necessary elements from the DOM
const Comp = document.getElementById("Comp");
const GraphC = document.getElementById("GraphC");
const Mont = document.getElementById("Mont");
const KeyB = document.getElementById("KeyB");
const Mouse = document.getElementById("Mouse");
const Table = document.getElementById("Table");
const Name = document.getElementById("Name");
const Surname = document.getElementById("Surname");
const Tbody =Table.querySelector("tbody");

// Add an EventListener to the Computer checkbox
Comp.addEventListener("change", function () {
    if (this.checked) {
        // Get the first row from the DOM to create a new td into it
        const Comr = Tbody.querySelector("tr:first-child");
        const Comtd = document.createElement("td:last-child");
        //Set value of td to be created
        const value = 2000;
        const unit = "R" 
        
        Comtd.textContent = unit + value
        Comr.appendChild(Comtd);
        // Set the position of the new td
        Comtd.style.paddingRight = "10px";
        Comtd.style.position = "absolute";

    } else {
        // Remove the second cell if checkbox is unchecked
        const Comr = Tbody.querySelector("tr:first-child");
        if (Comr.children.length > 1) {
            Comr.removeChild(Comr.lastElementChild);
        }
    }
});

// Add an EventListener to the Graphics card checkbox
GraphC.addEventListener("change", function () {
    if (this.checked) {
        // Get the corresponding row (4th) of Graphics card to add a new td
        const Grar = Tbody.querySelector("tr:nth-child(4)");
        const GCtd = document.createElement("td:last-child");
        // Set the value to be added 
        const value = 450;
        const unit = "R";
        GCtd.textContent = unit + [value];
        Grar.appendChild(GCtd);

    } else {
        // Remove the second cell if Gctd is unchecked
        const Grar = Tbody.querySelector("tr:nth-child(4)");
        if (Grar.children.length > 1) {
            Grar.removeChild(Grar.lastElementChild);
        };
    }
})

// Add an EventListener to the Monitor checkbox
Mont.addEventListener("change", function () {
    if (this.checked) {
        // Get the corresponding row (5) for of Monitor to add a new td
        const Monr = Tbody.querySelector("tr:nth-child(5)");
        const Montd = document.createElement("td:last-child");
        // Set the value to be added
        const value = 670;
        const unit = "R";
        Montd.textContent = unit + [value];
        Monr.appendChild(Montd);

    } else {
        // Remove the second cell if Mont is unchecked
        const Monr = Tbody.querySelector("tr:nth-child(5)");
        if (Monr.children.length > 1) {
            Monr.removeChild(Monr.lastElementChild)
        };
    }
})

// Add EventListener to the Keyboard
KeyB.addEventListener("change", function () {
    if (this.checked) {
        // Get the corresponding row (6) for Keyboard to add td
        const Keytr = Table.querySelector("tr:nth-child(6)");
        const Keytd = document.createElement("td:last-child");
        // Set value to be added
        const value = 450;
        const unit = "R";
        Keytd.textContent = unit + [value];
        Keytr.appendChild(Keytd);

    } else {
        const Keytr = Tbody.querySelector("tr:nth-child(6)");
        // Remove td when KeyB is unchecked
        if (Keytr.children.length > 1) {
            Keytr.removeChild(Keytr.lastElementChild);
        };
    }
})

// Add EventListener to Mouse
Mouse.addEventListener("change", function () {
    if (this.checked) {
        // Get the corresponding row (7) for Mouse to add td
        const Moutr = Tbody.querySelector("tr:nth-child(7)");
        const Moutd = document.createElement("td:last-child");
        // Set value to be added
        const value = 45;
        const unit = "R";
        Moutd.textContent = unit + [value];
        Moutr.appendChild(Moutd);

    } else {
        const Moutr = Tbody.querySelector("tr:nth-child(7)");
        // Remove td when mouse is unchecked
        if (Moutr.children.length > 1) {
            Moutr.removeChild(Moutr.lastElementChild)
        }
    }
})

// Get the additional DDR from the DOM and add an event listener
document.getElementById("additional DDR").addEventListener("change", function () {
    
    // Access the select event values
    const SelectV = parseInt(this.value);
    // Give the condition of the function
    if (SelectV >= 0 && SelectV <= 5) {
        // Get the corresponding row (2) for additional DDR to add tds
        const Adtr = Tbody.querySelector("tr:nth-child(2)");
        const Adtd1 = document.createElement("td:first-child");
        const Adtd2 = document.createElement("td:last-child");
        // Set values to be added 
        const Defv = 150;
        Adtd1.textContent = SelectV + 'x' + Defv + '=';
        Adtd2.textContent = "R" + [SelectV * Defv];
        // Append child to the tr
        Adtr.appendChild(Adtd1);
        Adtr.appendChild(Adtd2);
        // Add style to Adtd1
        Adtd1.style.position = 'absolute';
        Adtd1.style.left = '150px';

         //To remove some child if options are choosen more than once
        const n1 = 3;
        const n1child = Adtr.children[n1];
        const n2 = 2;
        const n2child = Adtr.children[n2]
        
        if (Adtr.children.length > 4) {
            Adtr.removeChild(n1child);
            Adtr.removeChild(n2child);
        };
    };

});

document.getElementById("additional HDD").addEventListener("change", function add () {
    //Access the select event values
    const SelectV = parseInt(this.value);
    //Gived the condition for the function
    if (SelectV >= 0 && SelectV <= 6) {
         //Access the corresponding Table row (3) to add td
         const Artr = Tbody.querySelector("tr:nth-child(3)");
         const Artd1 = document.createElement("td:first-child");
         const Artd2 = document.createElement("td:last-child");

         // Set a default value to multiply with the selected options
         const Defv = 600;

         //Set text content to be entered
         Artd1.textContent = SelectV + "x" + Defv + "=";
         Artd2.textContent = "R" + [SelectV * Defv];

         //Append children to the parent list
         Artr.appendChild(Artd1);
         Artr.appendChild(Artd2);

         //Set the position of Artd1
         Artd1.style.position = "absolute";
         Artd1.style.left = "150px";

         //To remove children if options are choosen more than once

         const n1 = 2;
         const n1child = Artr.children[n1];
         const n2 = 3;
         const n2child = Artr.children[n2];

         if (Artr.children.length > 4) {
            Artr.removeChild(n1child);
            Artr.removeChild(n2child);
         };
    };
});


document.getElementById("Calculate").addEventListener("click", function () {
    //Get the necessary elements
    const Footer = Table.querySelector("tfoot");
    const FootR1 = Footer.querySelector("tr:first-child");
    const FootR2 = Footer.querySelector("tr:nth-child(2)");
    const FootR3 = Footer.querySelector("tr:last-child");
    // Create and set values to be added to total
    const Tchilds = Table.querySelectorAll("tbody");
    //Now get all the elements with td:last-child tag
    for (let i=0; i < Tchilds.length; i++) {
        let Lasttd = Tchilds[i].getElementsByTagName("td:last-child");
        //Arrange all the td:last-child into an array
        const TdArray = Array.from(Lasttd).map(td => td.textContent);
        //Extract only the numbers without the symbols that indicates currency (Rands)
        const Intergers = TdArray.map(item => parseInt(item.match(/\d+/)[0]));
        //Add them all together
        const Sum = Intergers.reduce(function(total, number){
            return total + number
        }, 0);

        // Now create a function that creates a td:last-child and append to the total row
        const Total = document.createElement("td:last-child");
        Total.textContent = "R" + Sum;
        FootR1.appendChild(Total);
        //Add style to the top to indicate demacation
        Total.style.borderTop = "4px dotted white";
        //Set condition to remove td when button is clicked more than once
        const n1 = 2;
        const F1Child = FootR1.children[n1];
        if (FootR1.children.length > 3) {
            FootR1.removeChild(F1Child)
        };

        // Now set value for VAT (Value added tax at 5%)
        const VAT = 0.05 * Sum
        // Create a function that creates a td:last-child and append to the VAT rom
        const VATtd = document.createElement("td:last-child");
        VATtd.textContent = "R" + VAT;
        FootR2.appendChild(VATtd);
        //Set condition to remove td when button is clicked more than once
        const n2 = 2;
        const F2child = FootR2.children[n2];
        if (FootR2.children.length > 3) {
            FootR2.removeChild(F2child);
        }

        // Now set value for total payable (Overall total)
        const OTotal = VAT + Sum;
        // Create function that creates a td:last-child and append it to the Total payable row
        const OTotaltd = document.createElement("td:last-child");
        OTotaltd.textContent = "R" + OTotal
        FootR3.appendChild(OTotaltd);
        // Set condition to remove td when button is clicked more than once
        const n3 = 2;
        const F3child = FootR3.children[n3];
        if (FootR3.children.length > 3) {
            FootR3.removeChild(F3child);
        };

        // Now get the Name and Surname inputfield to make it show name of user
            const Thead = Table.querySelector("thead");
            const TheadRow = Thead.querySelector("tr:only-child");
            const TheadRowtd = TheadRow.querySelector("td:first-child");
            const New_Name = Name.value;
            const New_Surname = Surname.value;
            TheadRowtd.textContent ="Quotation for" +  " " + New_Surname + "," + " " + New_Name;
            Name.value = ""
            Surname.value = ""
            // Set it to switch names if a new name is entered
            const x = 0;
            const Name_node = TheadRow.children[x];
            if (TheadRow.children.length > 1) {
                TheadRow.removeChild(Name_node)
            };
             

            if (New_Name == "" || New_Surname == "") {
                alert("Please fill in your names!")
                FootR1.removeChild(FootR1.lastElementChild);
                FootR2.removeChild(FootR2.lastElementChild);
                FootR3.removeChild(FootR3.lastElementChild);
                TheadRowtd.textContent = "Quotation for...! Your both names are required"
            };

                // Change color of the footer last child to red and make it bold
        const FooterRows = Footer.querySelectorAll("tr")
        for (let i = 0; i <= FooterRows.length; i++) {
            if (FooterRows[i].children.length >= 2){
            FooterRows[i].lastElementChild.style.color = "red";
            }
        };
         
    };
});

document.getElementById("Clear").addEventListener("click", function () {
    //Get all the table rows of tbody and tfoot
    const Div3 = document.getElementById("Div3");
    const checkboxes = Div3.querySelectorAll("input")
    checkboxes.type = "checkbox"
    //uncheck the checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    })

   
     //Get all the table elements and clear them
     const Rows = Table.querySelectorAll("tr") 

     Rows.forEach(td => {
        const Lasttd = td.getElementsByTagName("td:last-child");
        if (Lasttd && td.children.length >= 2 ) {
            td.removeChild(td.lastChild);
            if (td.children.length >= 2){
            td.removeChild(td.lastChild);
            }
            if (td.children.length >= 2){
                td.removeChild(td.lastChild);
                }; 
                if (td.children.length >= 2){
                    td.removeChild(td.lastChild);
                    };
        }
        return;
     });
    
    const HDD = document.getElementById("additional HDD")
    HDD.value = ""
    const DDR = document.getElementById("additional DDR")
    DDR.value = ""
});




