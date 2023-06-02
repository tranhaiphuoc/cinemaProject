import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: Employee[] = [
    { id: 'NV01', name: 'Phan Tiến Dũng' },
    { id: 'NV02', name: 'Nguyễn Thị Hương' },
    { id: 'NV03', name: 'Trần Đức Anh' },
    { id: 'NV04', name: 'Lê Phương Ngọc' },
    { id: 'NV05', name: 'Đỗ Thành Nam' },
    { id: 'NV06', name: 'Phạm Thanh Hiền' },
    { id: 'NV07', name: 'Nguyễn Quang Linh' },
    { id: 'NV08', name: 'Bùi Thị Minh Trang' },
    { id: 'NV09', name: 'Lê Văn Tùng' },
    { id: 'NV10', name: 'Trần Thị Thu Hà' },
    { id: 'NV11', name: 'Phan Vũ Hoàng Long' },
    { id: 'NV12', name: 'Cao Thị Mai Anh' },
    { id: 'NV13', name: 'Hồ Ngọc Phúc' },
    { id: 'NV14', name: 'Đặng Văn Chiến' },
    { id: 'NV15', name: 'Ngô Thị Kim Dung' },
    { id: 'NV16', name: 'Lưu Văn Khánh' },
    { id: 'NV17', name: 'Vũ Thị Thu Trang' },
    { id: 'NV18', name: 'Nguyễn Đức Hùng' },
    { id: 'NV19', name: 'Trần Thị Mỹ Duyên' },
    { id: 'NV20', name: 'Nguyễn Văn Hà' },
    { id: 'NV21', name: 'Phạm Minh Anh' },
    { id: 'NV22', name: 'Lý Thanh Tùng' },
    { id: 'NV23', name: 'Ngô Thị Kim Ngân' },
    { id: 'NV24', name: 'Vũ Minh Chiến' },
    { id: 'NV25', name: 'Trần Đăng Khoa' },
    { id: 'NV26', name: 'Lê Thị Thanh Huyền' },
    { id: 'NV27', name: 'Nguyễn Đức Long' },
    { id: 'NV28', name: 'Bùi Thị Lan Anh' },
    { id: 'NV29', name: 'Hoàng Thế Anh' },
    { id: 'NV30', name: 'Hoàng Thế Vũ' },
  ];
  constructor() { }

  getList(): Employee[] {
    return this.employeeList;
  }

  deleteItem(input: Employee) {
    if (input == null)
      return;
    const index = _.findIndex(this.employeeList, (item: Employee) => {
      return item.id == input.id;
    });
    if (index == -1)
      return;
    this.employeeList.splice(index, 1);
  }
}
