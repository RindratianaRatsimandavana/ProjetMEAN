import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-static',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './static.component.html',
    styleUrls: ['static.component.scss'],
})
export class StaticComponent implements OnInit {
    closeResult = '';

    constructor(private modalService: NgbModal) {}

    private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

    open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
    ngOnInit() {}
}
