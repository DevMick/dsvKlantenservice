export const metadata = {
    title: "Maintenance | DSV",
    description: "Site momentanément indisponible pour maintenance.",
};

export default function MaintenancePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 p-6">
            <div className="max-w-xl text-center">
                <img
                    src="/favicon.svg"
                    alt="Logo"
                    className="mx-auto mb-6 h-12 w-12"
                />
                <h1 className="text-3xl font-semibold mb-2">
                    Site momentanément indisponible
                </h1>
                <p className="text-lg mb-6">
                    Nous effectuons actuellement une maintenance. Merci de revenir un peu plus tard.
                </p>
                <p className="text-sm text-gray-500">
                    Nous nous excusons pour la gêne occasionnée.
                </p>
            </div>
        </main>
    );
}


