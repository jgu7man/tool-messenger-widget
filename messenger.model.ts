export class GdevMessengerModel  {
    constructor (
        public page_id: any,
        public theme_color?: string,
        public logged_in_greeting?: string,
        public logged_out_greeting?: string
    ) {

    }
}

export type GdevMessengerModelKeys = "page_id" | "theme_color" | "logged_in_greeting" | "logged_out_greeting"
