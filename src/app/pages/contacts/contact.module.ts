import { ContactsComponent } from './contacts.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const payrollRoutes: Routes = [
  { path: "", component: ContactsComponent },
  // { path: "/payslip", component: PayslipComponent }
];
@NgModule({
  declarations: [
   
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(payrollRoutes),
    FormsModule,
    ReactiveFormsModule,
    // AngularFontAwesomeModule,
    // ToastrModule.forRoot(),
    // NgxSpinnerModule,
    // SharedModule
  ],
  // providers: [EmployeesService, ContractService, PayrollService]
})
export class ContactModule {}
