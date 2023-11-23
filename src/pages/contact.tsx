import { Meta } from "@/layouts/Meta";
import { ContactPage } from "@/screens/Contactus";

const Contact = () => {
    return (
        <div>
            <ContactPage
                meta={
                    <Meta
                        title="Contact | Seismic Assessment"
                        description="Contact | Seismic Assessment" />
                } />
        </div>
    )
}

export default Contact;