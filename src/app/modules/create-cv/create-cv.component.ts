import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MasterDataService } from '../../core/masterData/master-data.service';
import { IApiResponse } from '../../core/interfaces/api/api';
import { RequestsService } from '../../core/requests/requests.service';

@Component({
  selector: 'app-create-cv',
  standalone:false,
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {
  // Animation
  maxHeight = window.innerHeight;
  minWidth = 5
  //===========

  subscription:Subscription = new Subscription()
  selectedDate:any
  address!: any;
  currentSalary!: any;
  expectedSalary!: any;
  firstName!: string;
  secondName!: string;
  familyName!: string;
  email!: string;
  phoneNo!: string;
  cvFile: File | null = null;

  gender!:any[];
  selectedGender!: any;

  martialStatus!:any[];
  selectedMartialStatus!:any;

  year: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '15+'];
  selectedYear!:any;

  countries!:any[]
  selectedCountry!:any

  positions!:any[]
  selectedPosition!:any

  locations!:any[]
  selectedLocation!:any

  source!:any[]
  selectedSource!:any

  iqamaType!:any[]
  selectedIqamaType!:any

  qualifications!:any[]
  selectedQualifications!:any

  allCities!:any[]
  selectedCity!:any

  languages!:any[]
  selectedLanguage!:any

  constructor(private masterService:MasterDataService, private requestsService: RequestsService){}

  // Animation Logic
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollPercentage = Math.max(0, Math.min(1, scrollTop / this.maxHeight));

    const newWidth = ( 100 - scrollPercentage * 100);

    const element = document.querySelector('.animation-border') as HTMLElement;
    if (element) {
      element.style.width = `${newWidth}%`;
    }
  }
  // End of Animation Logic

  ngOnInit(): void {
    this.onWindowScroll();
    this.getGender()
    this.getMartialStaus()
    this.getCountries()
    this.getPositions()
    this.getCurrentLocation()
    this.getIqamaType()
    this.getQualifications()
    this.getSource()
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.cvFile = input.files[0];
      console.log('CV File Selected:', this.cvFile.name);
    }
  }

  //API Logic
  getGender(){
    this.subscription = this.masterService.getMetaData('221').subscribe({
      next:(res:IApiResponse)=>{
        this.gender = res.data
        console.log(res);
      }
    })
  }

  getMartialStaus(){
    this.subscription = this.masterService.getMetaData('112').subscribe({
      next:(res:IApiResponse)=>{
        this.martialStatus = res.data
        console.log(res);
      }
    })
  }

  getSource(){
    this.subscription = this.masterService.getMetaData('155').subscribe({
      next:(res:IApiResponse)=>{
        this.source = res.data
        console.log('source',res);
      }
    })
  }

  getIqamaType(){
    this.subscription = this.masterService.getMetaData('156').subscribe({
      next:(res:IApiResponse)=>{
        this.iqamaType = res.data
        console.log('iqama',res);
      }
    })
  }

  getQualifications(){
    this.subscription = this.masterService.getMetaData('157').subscribe({
      next:(res:IApiResponse)=>{
        this.qualifications = res.data
        console.log('qualification',res);
      }
    })
  }

  getCountries(){
    this.subscription = this.masterService.getCountry().subscribe({
      next:(res:IApiResponse)=>{
        this.countries = res.data
        // this.countries.map((country:any)=>{
        //   return country.id === this.selectedCountry
        // })
        console.log(res);
      }
    })
  }

  getCitiesByCountry() {
      this.requestsService.getCitiesByCountry(this.selectedCountry).subscribe(
        {
          next: (res: IApiResponse) => {
            console.log(this.selectedCountry);
            this.allCities = res.data;
            console.log('cities', this.allCities);
          },
          error: (err:any) => {
            console.log(err);
          }
        }
      )
  }

  getCurrentLocation(){
    this.subscription = this.masterService.getCountry().subscribe({
      next:(res:IApiResponse)=>{
        this.locations = res.data
        console.log(res);
      }
    })
  }

  getPositions(){
    this.subscription = this.requestsService.getPositions().subscribe({
      next:(res:IApiResponse)=>{
        this.positions = res.data
        console.log(res);
      }
    })
  }

  // onSubmit(){
  //   console.log('gender', this.selectedGender);
  //   console.log('martial status', this.selectedMartialStatus);
  //   console.log('experience years', this.selectedYear);
  //   console.log('country', this.selectedCountry);
  //   console.log('positon', this.selectedPosition);
  //   console.log('location', this.selectedLocation);
  //   console.log('city', this.selectedCity);
  //   console.log('date of birth', this.selectedDate);
  //   console.log('Address:', this.address);
  //   console.log('Current Salary:', this.currentSalary);
  //   console.log('Expected Salary:', this.expectedSalary);
  //   console.log('First Name:', this.firstName);
  //   console.log('Second Name:', this.secondName);
  //   console.log('Family Name:', this.familyName);
  //   console.log('Email:', this.email);
  //   console.log('Phone No.:', this.phoneNo);
  //   console.log('Uploaded CV:', this.cvFile ? this.cvFile.name : 'No file uploaded');
  // }

  onSubmit(): void {
    if (!this.cvFile) {
      console.error('Please select a CV file before submitting.');
      return;
    }

    const formData = new FormData();

    // Append file
    formData.append('cvFile', this.cvFile);

    // Append other form fields
    formData.append('firstName', this.firstName || '');
    formData.append('secondName', this.secondName || '');
    formData.append('familyName', this.familyName || '');
    formData.append('email', this.email || '');
    formData.append('phoneNo', this.phoneNo || '');
    formData.append('address', this.address || '');
    formData.append('currentSalary', this.currentSalary || '');
    formData.append('expectedSalary', this.expectedSalary || '');
    formData.append('gender', this.selectedGender || '');
    formData.append('martialStatus', this.selectedMartialStatus || '');
    formData.append('experienceYears', this.selectedYear || '');
    formData.append('country', this.selectedCountry || '');
    formData.append('position', this.selectedPosition || '');
    formData.append('location', this.selectedLocation || '');
    formData.append('city', this.selectedCity || '');
    formData.append('dateOfBirth', this.selectedDate || '');

    // Log the FormData content (optional for debugging)
    console.log('Submitting FormData:');
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Send the data via the service
    // this.requestsService.submitCv(formData).subscribe({
    //   next: (response) => {
    //     console.log('Submission successful:', response);
    //   },
    //   error: (error) => {
    //     console.error('Submission error:', error);
    //   }
    // });
  }

}
