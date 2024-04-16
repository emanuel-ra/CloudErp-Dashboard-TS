import { useCallback, useState } from 'react'
import {
  type ICustomerNew
} from '../../abstraction/Interfaces/ICustomers'
import { CreateCustomer } from '../../services/Customer'

interface Props {
  formData: ICustomerNew
}

export const useCustomerCreate = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const createCustomer = useCallback(async ({ formData }: Props) => {
    setLoading(true)
    try {
      const mappedData = {
        vchNombres: formData.vchNombres,
        vchApellidos: formData.vchApellidos,
        vchCodigo: formData.vchCodigo,
        vchTelefonos: formData.vchTelefonos,
        vchCorreos: formData.vchCorreos,
        address: formData.address,
        vchRFC: formData.vchRFC,
        vchCodigoPostal: formData.vchCodigoPostal,
        vchComentario: formData.vchComentario,
        idPais: formData.idPais,
        idEstado: formData.idEstado,
        vchNumInt: formData.vchNumInt,
        vchNumExt: formData.vchNumExt,
        external_id: formData.external_id,
        sat_cp: formData.sat_cp,
        sat_razonsocial: formData.sat_razonsocial,
        email_cfdi: formData.email_cfdi,
        sat_regimen_fiscal_clave: formData.sat_regimen_fiscal_clave,
        sat_uso_cfdi_clave: formData.sat_uso_cfdi_clave,
        idStatus: formData.idStatus
      }

      const response: ICustomerNew = await CreateCustomer(mappedData)
      // console.log("responseCreate",response)
      return response
    } catch (error) {
      console.error('Error al actualizar los datos:', error)
      return error
    } finally {
      setLoading(false)
    }
  }, [])

  return { createCustomer, loading }
}
