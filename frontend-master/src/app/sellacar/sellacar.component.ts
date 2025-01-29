import { Component } from '@angular/core';
import { CardataService } from '../cardata.service';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

@Component({
  selector: 'app-sellacar',
  standalone: true,  // <-- Use standalone: true
  imports: [FormsModule],  // <-- Add FormsModule here
  templateUrl: './sellacar.component.html',
  styleUrls: ['./sellacar.component.css']  // <-- Use styleUrls instead of styleUrl
})
export class SellacarComponent {
  car = {id: 0,
    registrationNumber: '',
    ownerName: '',
    carMake: '',
    carModel: '',
    variant: '',
    year: 0,
    price: 0,
    imageUrl: [],
    description: '',
    mileage: 0,
    fuelType: '',
    transmission: '',
    bodyType: '',
    engineCapacity: 0,
    fuelEfficiency: 0,
    emissions: 0,
    availability: 'Available',
    location: '',
    userId: 0,
    biddingAllowed: false,  // Default to false
    isSold: false,
    bookingCount: 0
  };

  constructor(private carDataService: CardataService) {}

  onSubmit() {
    this.carDataService.addCar(this.car).subscribe(
      response => {
        console.log('Car added successfully', response);
        alert('Car added successfully!');
      },
      error => {
        console.error('Error adding car:', error);
        alert('There was an error adding the car.');
      }
    );
  }
}
