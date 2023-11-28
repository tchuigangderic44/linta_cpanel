import { useTranslation } from "react-i18next";
import { ErrorResponseApi } from "../constants/types"



function getErrorResponse(payload: any): ErrorResponseApi {
    return payload.response.data;
}

function objectToFormData(payload: any): FormData {
    let form_data = new FormData();

    for ( let key in payload ) {
        form_data.append(key, payload[key]);
    }

    return form_data;
}

function tcustom(errorResponseApi?: ErrorResponseApi) {
    const { t, i18n } = useTranslation();

    if (errorResponseApi) {
        switch (i18n.language) {
            case 'en-US':
                return errorResponseApi.message.en;
            case 'fr-FR':
                return errorResponseApi.message.fr;
            default:
                return errorResponseApi.message.fr;

        }
    }
    return ''
}

export { getErrorResponse, tcustom , objectToFormData}