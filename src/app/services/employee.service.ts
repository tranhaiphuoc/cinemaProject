import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: Employee[] = [
    {
      IDcard: 752369184256,
      name: 'Phan Tiến Dũng',
      DOB: new Date(1990, 0, 1),
      phone: 912345678,
      address: 'Số nhà 10, đường Trần Hưng Đạo, phường Bến Thành, quận 1, TP.HCM'
    },
    {
      IDcard: 635418920174,
      name: 'Nguyễn Thị Hương',
      DOB: new Date(1991, 1, 2),
      phone: 987654321,
      address: 'Số nhà 20, đường Nguyễn Thị Minh Khai, phường Đa Kao, quận 1, TP.HCM'
    },
    {
      IDcard: 841923756321,
      name: 'Trần Đức Anh',
      DOB: new Date(1992, 2, 3),
      phone: 967890123,
      address: 'Số nhà 5, đường Lê Lợi, phường Bến Nghé, quận 1, TP.HCM'
    },
    {
      IDcard: 569201487236,
      name: 'Lê Phương Ngọc',
      DOB: new Date(1993, 3, 4),
      phone: 912345678,
      address: 'Số nhà 15, đường Nam Kỳ Khởi Nghĩa, phường Bến Thành, quận 1, TP.HCM'
    },
    {
      IDcard: 984217635120,
      name: 'Đỗ Thành Nam',
      DOB: new Date(1994, 4, 5),
      phone: 987654321,
      address: 'Số nhà 30, đường Pasteur, phường Bến Nghé, quận 1, TP.HCM'
    },
    {
      IDcard: 723456789012,
      name: 'Phạm Thanh Hiền',
      DOB: new Date(1995, 5, 6),
      phone: 967890123,
      address: 'Số nhà 40, đường Lê Duẩn, phường Bến Nghé, quận 1, TP.HCM'
    },
    {
      IDcard: 456789012345,
      name: 'Nguyễn Quang Linh',
      DOB: new Date(1996, 6, 7),
      phone: 912345678,
      address: 'Số nhà 50, đường Phan Đình Phùng, phường Phú Nhuận, quận Phú Nhuận, TP.HCM'
    },
    {
      IDcard: 901234567890,
      name: 'Bùi Thị Minh Trang',
      DOB: new Date(1997, 7, 8),
      phone: 987654321,
      address: 'Số nhà 60, đường Hoàng Sa, phường Thảo Điền, quận 2, TP.HCM'
    },
    {
      IDcard: 374823947593,
      name: 'Lê Văn Tùng',
      DOB: new Date(1998, 8, 9),
      phone: 967890123,
      address: 'Số nhà 70, đường Nguyễn Công Trứ, phường Nguyễn Thái Bình, quận 1, TP.HCM'
    },
    {
      IDcard: 123456789012,
      name: 'Trần Thị Thu Hà',
      DOB: new Date(1999, 9, 10),
      phone: 912345678,
      address: 'Số nhà 80, đường Nguyễn Trãi, phường Phạm Ngũ Lão, quận 1, TP.HCM'
    },
    {
      IDcard: 564738291034,
      name: 'Phan Vũ Hoàng Long',
      DOB: new Date(2000, 10, 11),
      phone: 987654321,
      address: 'Số nhà 90, đường Đề Thám, phường Cô Giang, quận 1, TP.HCM'
    },
    {
      IDcard: 987654321076,
      name: 'Cao Thị Mai Anh',
      DOB: new Date(1990, 5, 10),
      phone: 912345678,
      address: 'Số nhà 12, đường Trần Hưng Đạo, phường Ngô Quyền, quận Hải Phòng'
    },
    {
      IDcard: 246801357919,
      name: 'Hồ Ngọc Phúc',
      DOB: new Date(1988, 3, 15),
      phone: 987654321,
      address: 'Số nhà 45, đường Bùi Thị Xuân, phường Bến Thành, quận 1, TP. HCM'
    },
    {
      IDcard: 135790864268,
      name: 'Đặng Văn Chiến',
      DOB: new Date(1995, 7, 20),
      phone: 967890123,
      address: 'Số nhà 56, đường Lý Tự Trọng, phường Bến Thành, quận 1, TP. HCM'
    },
    {
      IDcard: 975310246831,
      name: 'Ngô Thị Kim Dung',
      DOB: new Date(1986, 9, 25),
      phone: 912345678,
      address: 'Số nhà 78, đường Nguyễn Chí Thanh, phường Láng Hạ, quận Đống Đa, Hà Nội'
    },
    {
      IDcard: 468013257490,
      name: 'Lưu Văn Khánh',
      DOB: new Date(1992, 1, 5),
      phone: 987654321,
      address: 'Số nhà 34, đường Hàm Long, phường Phan Chu Trinh, thành phố Thanh Hóa'
    },
    {
      IDcard: 246897531048,
      name: 'Vũ Thị Thu Trang',
      DOB: new Date(1998, 11, 30),
      phone: 967890123,
      address: 'Số nhà 67, đường Ngô Gia Tự, phường Tân An, quận Ninh Kiều, Cần Thơ'
    },
    {
      IDcard: 908765432167,
      name: 'Nguyễn Đức Hùng',
      DOB: new Date(1987, 6, 18),
      phone: 912345678,
      address: 'Số nhà 23, đường Nguyễn Thị Minh Khai, phường Đa Kao, quận 1, TP. HCM'
    },
    {
      IDcard: 978645321067,
      name: 'Trần Thị Mỹ Duyên',
      DOB: new Date(1994, 2, 27),
      phone: 987654321,
      address: 'Số nhà 56, đường Nguyễn Huệ, phường Bến Nghé, quận 1, TP. HCM'
    },
    {
      IDcard: 345678901234,
      name: 'Nguyễn Văn Hà',
      DOB: new Date(1990, 8, 8),
      phone: 967890123,
      address: 'Số nhà 78, đường Trần Phú, phường Xuân Thủy, quận Cầu Giấy, Hà Nội'
    },
    {
      IDcard: 891023456789,
      name: 'Phạm Minh Anh',
      DOB: new Date(1996, 4, 16),
      phone: 912345678,
      address: 'Số nhà 34, đường Lê Duẩn, phường Bến Nghé, quận 1, TP. HCM'
    },
    {
      IDcard: 567890123450,
      name: 'Lý Thanh Tùng',
      DOB: new Date(1989, 12, 5),
      phone: 987654321,
      address: 'Số nhà 56, đường Lê Văn Duyệt, phường Bến Nghé, quận 1, TP.HCM'
    }
  ];
  constructor() { }

  getList(): Employee[] {
    return this.employeeList;
  }

  getById(IDcard: number): Employee | undefined {
    return _.find(this.employeeList, (item: Employee) => {
      return item.IDcard == IDcard;
    });
  }

  addItem(newInput: Employee) {
    if (newInput == null)
      return;
    this.employeeList.push(newInput);
  }

  deleteItem(input: Employee) {
    if (input == null)
      return;
    const index = _.findIndex(this.employeeList, (item: Employee) => {
      return item.IDcard == input.IDcard;
    });
    if (index == -1)
      return;
    this.employeeList.splice(index, 1);
  }

  updateItem(newInput: Employee) {
    if (newInput == null)
      return;
    const index = _.findIndex(this.employeeList, (item: Employee) => {
      return item.IDcard == newInput.IDcard;
    });
    if (index == -1)
      return;
    this.employeeList[index] = newInput;
  }
}
