import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Data {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  getData(pageIndex: number): Observable<{ data: Data[]; listLength: number }> {
    return of({ data: createData(pageIndex), listLength: 100 });
  }
}

// Весь код ниже генератор данных, НЕ ВАЖНО!!!
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

function createNewUser(id: number): Data {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id,
    name: name,
  };
}

function createData(pageNumber: number): Data[] {
  const dataArr: Data[] = [];
  for (let i = pageNumber * 10; i < pageNumber * 10 + 10; i++) {
    dataArr.push(createNewUser(i));
  }
  return dataArr;
}
export const additionalData: Data[] = [
  { name: 'Nick0', id: 0 },
  { name: 'Nick1', id: 1 },
  { name: 'Nick2', id: 2 },
  { name: 'Nick3', id: 3 },
  { name: 'Nick4', id: 4 },
  { name: 'Nick5', id: 5 },
  { name: 'Nick6', id: 6 },
  { name: 'Nick7', id: 7 },
  { name: 'Nick8', id: 8 },
  { name: 'Nick9', id: 9 },
];
