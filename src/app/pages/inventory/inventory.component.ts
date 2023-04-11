import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  itemList!: Item[];
  items:string[] = [
    'text','text','text', 'text'
  ];

constructor(public dialog: MatDialog, public itemService:ItemService()){ }
async openDialog() {
  const dialogRef = this.dialog.open(FormComponent, {
    width: '250px',
    data: {items this.items },
  });
}
getItems():void{
  this.itemsService.getItems().subscribe((list: Item[])=>){
    this.itemList = list;
  }
}
dialogRef.afterClosed().subscribe(()=> {
  console.log('The dialog was closed');
});
constructor(){}
ngOnInit():void{
  
}
}