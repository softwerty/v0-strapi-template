import { NextRequest, NextResponse } from 'next/server';
import { fetchGraphQL } from "@/lib/graphql/client";
import { GET_CAMPAIGNS } from "@/lib/graphql/queries";
import { CampaignsData } from "@/types/campaign";

export async function GET(request: NextRequest) {
  try {
    const data: CampaignsData = await fetchGraphQL(GET_CAMPAIGNS);

    if (!data || !data.campanas) {
      throw new Error('La respuesta de la API no contiene los datos esperados');
    }

    // Here, we would normally generate the PDF.
    // For now, we'll just return a dummy response.
    return NextResponse.json({ 
      message: "PDF generado exitosamente", 
      downloadUrl: "/api/download-pdf" 
    });
  } catch (error) {
    console.error('Error al generar el PDF:', error);
    return NextResponse.json({ error: 'Error al generar el PDF' }, { status: 500 });
  }
}

