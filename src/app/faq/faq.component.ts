import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faq = [
    {
      question: "What is the voltage of power outlets on Taniti?",
      answer: "Power outlets are 120 volts (the same as in the United States).",
      show: false
    },
    {
      question: "Are there any restrictions on serving alcohol?",
      answer: "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.",
      show: false
    },
    {
      question: "What is the legal drinking age on Taniti?",
      answer: "The drinking age on Taniti is 18, and it is not strictly enforced.",
      show: false
    },
    {
      question: "How well do Tanitians speak English?",
      answer: "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.",
      show: false
    },
    {
      question: "What healthcare facilities are available on Taniti?",
      answer: "There is one hospital and several clinics. The hospital has many multilingual employees.",
      show: false
    },
    {
      question: "Is crime a concern in Taniti?",
      answer: "Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.",
      show: false
    },
    {
      question: "Are tourist attractions open during national holidays?",
      answer: "Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.",
      show: false
    },
    {
      question: "What currency is used on Taniti?",
      answer: "Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.",
      show: false
    }
  ];
  
}
