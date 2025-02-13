import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MasterDataService } from '../../core/masterData/master-data.service';
import { IApiResponse } from '../../core/interfaces/api/api';
import { RequestsService } from '../../core/requests/requests.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cv',
  standalone: false,
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {
  // Animation
  maxHeight = window.innerHeight;
  minWidth = 5
  //===========

  subscription: Subscription = new Subscription()
  cvForm: FormGroup;

  isCvUploaded = false;

  gender!: any[];

  martialStatus!: any[];

  year: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '15+'];

  countries!: any[]

  positions!: any[]

  locations!: any[]

  source!: any[]

  iqamaType!: any[]

  qualifications!: any[]

  allCities!: any[]

  languages!: any[]

  currencies!: any[]

  constructor(private masterService: MasterDataService, private requestsService: RequestsService, private fb: FormBuilder) {
    {
      this.cvForm = this.fb.group({
        firstName: ['', Validators.required],
        secondName: ['', Validators.required],
        familyName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        selectedGender: ['', Validators.required],
        selectedMartialStatus: ['', Validators.required],
        selectedPosition: ['', Validators.required],
        selectedYear: ['', Validators.required],
        selectedCountry: ['', Validators.required],
        selectedLocation: ['', Validators.required],
        selectedCity: ['', Validators.required],
        selectedDate: ['', [Validators.required, this.pastDateValidator]],
        selectedSource: ['', Validators.required],
        selectedLanguage: ['', Validators.required],
        selectedIqamaType: ['', Validators.required],
        selectedQualifications: ['', Validators.required],
        selectedCurrency: ['', Validators.required],
        address: ['', Validators.required],
        currentSalary: ['', [Validators.required, Validators.min(0)]],
        expectedSalary: ['', [Validators.required, Validators.min(0)]],
        cvFile: [null, Validators.required]
      });
    }
  }
  // Animation Logic
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollPercentage = Math.max(0, Math.min(1, scrollTop / this.maxHeight));

    const newWidth = (100 - scrollPercentage * 100);

    const element = document.querySelector('.animation-border') as HTMLElement;
    if (element) {
      element.style.width = `${newWidth}%`;
    }
  }
  // End of Animation Logic

  get f() {
    return this.cvForm.controls;
  }

  //Date validation
  pastDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value) return null;
    const today = new Date();
    const selectedDate = new Date(control.value);
    return selectedDate > today ? { futureDate: true } : null;
  }


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
    this.getLanguages()
    this.getCurrencies()
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.f['cvFile'].setValue(input.files[0]);
      this.isCvUploaded = true;
      console.log('CV File Selected:', this.f['cvFile']);
    }
  }

  //API Logic
  getGender() {
    this.subscription = this.masterService.getMetaData('221').subscribe({
      next: (res: IApiResponse) => {
        this.gender = res.data
        console.log('gender',res);
      }
    })
  }

  getMartialStaus() {
    this.subscription = this.masterService.getMetaData('112').subscribe({
      next: (res: IApiResponse) => {
        this.martialStatus = res.data
        console.log('martialStatus',res);
      }
    })
  }

  getSource() {
    this.subscription = this.masterService.getMetaData('155').subscribe({
      next: (res: IApiResponse) => {
        this.source = res.data
        console.log('source', res);
      }
    })
  }

  getIqamaType() {
    this.subscription = this.masterService.getMetaData('156').subscribe({
      next: (res: IApiResponse) => {
        this.iqamaType = res.data
        console.log('iqama', res);
      }
    })
  }

  getQualifications() {
    this.subscription = this.masterService.getMetaData('157').subscribe({
      next: (res: IApiResponse) => {
        this.qualifications = res.data
        console.log('qualification', res);
      }
    })
  }

  getLanguages() {
    this.subscription = this.masterService.getMetaData('158').subscribe({
      next: (res: IApiResponse) => {
        this.languages = res.data
        console.log('languages', res);
      }
    })
  }

  getCountries() {
    this.subscription = this.masterService.getCountry().subscribe({
      next: (res: IApiResponse) => {
        this.countries = res.data
        console.log('Countries',res);
      }
    })
  }

  getCitiesByCountry() {
    this.requestsService.getCitiesByCountry(this.f['selectedCountry'].value).subscribe(
      {
        next: (res: IApiResponse) => {
          console.log(this.f['selectedCountry'].value);
          this.allCities = res.data;
          console.log('cities', this.allCities);
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    )
  }

  getCurrentLocation() {
    this.subscription = this.masterService.getCountry().subscribe({
      next: (res: IApiResponse) => {
        this.locations = res.data
        console.log('Location', res);
      }
    })
  }

  getPositions() {
    this.subscription = this.requestsService.getPositions().subscribe({
      next: (res: IApiResponse) => {
        this.positions = res.data
        console.log('Positions',res);
      }
    })
  }

  getCurrencies() {
    this.subscription = this.requestsService.getCurrencies().subscribe({
      next: (res: IApiResponse) => {
        this.currencies = res.data
        console.log('Currencies',res);
      }
    })
  }

  onSubmit(): void {
    // if (!this.f['cvFile'].value) {
    //   console.error('Please select a CV file before submitting.');
    //   return;
    // }

    const formData = new FormData();

    // Append file
    formData.append('cvFile', this.f['cvFile'].value);

    // Append other form fields
    formData.append('firstName', this.f['firstName'].value || '');
    formData.append('secondName', this.f['secondName'].value || '');
    formData.append('familyName', this.f['familyName'].value || '');
    formData.append('email', this.f['email'].value || '');
    formData.append('phoneNo', this.f['phoneNo'].value || '');
    formData.append('address', this.f['address'].value || '');
    formData.append('currentSalary', this.f['currentSalary'].value || '');
    formData.append('expectedSalary', this.f['expectedSalary'].value || '');
    formData.append('gender', this.f['selectedGender'].value || '');
    formData.append('martialStatus', this.f['selectedMartialStatus'].value || '');
    formData.append('experienceYears', this.f['selectedYear'].value || '');
    formData.append('country', this.f['selectedCountry'].value || '');
    formData.append('position', this.f['selectedPosition'].value || '');
    formData.append('location', this.f['selectedLocation'].value || '');
    formData.append('city', this.f['selectedCity'].value || '');
    formData.append('dateOfBirth', this.f['selectedDate'].value || '');
    formData.append('iqamaType', this.f['selectedIqamaType'].value || '');
    formData.append('currency', this.f['selectedCurrency'].value || '');
    // if (this.cvForm.valid){

    if (true){
        console.log('Submitting FormData:');
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }else {
      console.log('Form Invalid');
      this.cvForm.markAllAsTouched();
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

