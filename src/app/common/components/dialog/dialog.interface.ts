

export interface DialogInterface {
	title: string | undefined;
  message: string | undefined;
	onResponse(response: ResponseDialogType): void;
	onAccept(event: Event): void;
	onCancel(event: Event): void;
	onDismiss(event: Event): void;
}

export type ResponseDialogType = "ACCEPT" | "CANCEL" | undefined;