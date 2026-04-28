import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Info, TriangleAlert, CheckCircle2 } from "lucide-react"

export default function StyleguidePage() {
    return (
        <div className="p-10 space-y-16 max-w-5xl">
            <div>
                <h1 className="text-4xl font-bold font-sans tracking-tight mb-2">Tokens de Design</h1>
                <p className="text-muted-foreground text-lg">
                    Fundação visual do Design System da Agência Vantu.
                </p>
            </div>

            {/* Colors Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-sans border-b pb-2">Cores</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Cores de Base</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ColorBox name="Background" variable="var(--background)" />
                            <ColorBox name="Foreground" variable="var(--foreground)" border />
                            <ColorBox name="Card" variable="var(--card)" border />
                            <ColorBox name="Muted" variable="var(--muted)" border />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Cores da Marca</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ColorBox name="Primary" variable="var(--primary)" textVar="var(--primary-foreground)" />
                            <ColorBox name="Secondary" variable="var(--secondary)" textVar="var(--secondary-foreground)" />
                            <ColorBox name="Accent" variable="var(--accent)" textVar="var(--accent-foreground)" border />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Cores Semânticas</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ColorBox name="Destructive (Error)" variable="var(--destructive)" textVar="var(--destructive-foreground)" />
                            <ColorBox name="Success" variable="var(--success)" textVar="var(--success-foreground)" />
                            <ColorBox name="Warning" variable="var(--warning)" textVar="var(--warning-foreground)" />
                            <ColorBox name="Info" variable="var(--info)" textVar="var(--info-foreground)" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-sans border-b pb-2">Tipografia</h2>

                <div className="space-y-8 bg-card border rounded-xl p-8">
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Heading 1 - Montserrat Bold</div>
                        <h1 className="text-5xl font-bold font-sans tracking-tight">The quick brown fox jumps</h1>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Heading 2 - Montserrat Semibold</div>
                        <h2 className="text-4xl font-semibold font-sans tracking-tight">The quick brown fox jumps</h2>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Heading 3 - Montserrat Medium</div>
                        <h3 className="text-3xl font-medium font-sans">The quick brown fox jumps</h3>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Heading 4 - Montserrat</div>
                        <h4 className="text-2xl font-sans">The quick brown fox jumps</h4>
                    </div>
                    <div className="pt-4 border-t">
                        <div className="text-sm text-muted-foreground mb-2">Body (Source Sans 3 Regular)</div>
                        <p className="text-base font-mono leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-2">Link (Source Sans 3 Bold)</div>
                        <a href="#" className="text-primary font-mono font-bold hover:underline">
                            Veja o projeto →
                        </a>
                    </div>
                </div>
            </section>

            {/* Components Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-sans border-b pb-2">Componentes Base</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Buttons */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Botões (Raio Pílula)</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button>FALE CONOSCO</Button>
                            <Button variant="secondary">SAIBA MAIS</Button>
                            <Button variant="destructive">Excluir</Button>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center pt-2">
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Badges</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>
                    </div>

                    {/* Alerts */}
                    <div className="space-y-4 md:col-span-2">
                        <h3 className="text-lg font-semibold">Alertas</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Informativo</AlertTitle>
                                <AlertDescription>
                                    Este é um alerta de informação normal para o usuário.
                                </AlertDescription>
                            </Alert>
                            <Alert variant="destructive">
                                <TriangleAlert className="h-4 w-4" />
                                <AlertTitle>Erro crítico!</AlertTitle>
                                <AlertDescription>
                                    Sua sessão expirou. Por favor, faça login novamente.
                                </AlertDescription>
                            </Alert>
                            <Alert className="border-success text-success [&>svg]:text-success bg-success/10">
                                <CheckCircle2 className="h-4 w-4" />
                                <AlertTitle>Sucesso</AlertTitle>
                                <AlertDescription>
                                    Sua alteração foi salva com sucesso no sistema.
                                </AlertDescription>
                            </Alert>
                            <Alert className="border-warning text-warning [&>svg]:text-warning bg-warning/10">
                                <TriangleAlert className="h-4 w-4" />
                                <AlertTitle>Atenção</AlertTitle>
                                <AlertDescription>
                                    Existem campos não preenchidos no seu perfil.
                                </AlertDescription>
                            </Alert>
                        </div>
                    </div>

                    {/* Cards & Radio Group */}
                    <div className="space-y-4 md:col-span-2 grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Card</h3>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Projeto Digital</CardTitle>
                                    <CardDescription>Digital Rebrand & User Experience</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm font-mono text-muted-foreground">
                                        Este projeto foca na reconstrução da experiência visual do usuário com um layout moderno e escuro.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Ver Projeto</Button>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Radio Group</h3>
                            <Card>
                                <CardContent className="pt-6">
                                    <RadioGroup defaultValue="option-one">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-one" id="option-one" />
                                            <Label htmlFor="option-one">→ Option 1</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-two" id="option-two" />
                                            <Label htmlFor="option-two">→ Option 2</Label>
                                        </div>
                                    </RadioGroup>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function ColorBox({
    name,
    variable,
    textVar = "var(--foreground)",
    border = false
}: {
    name: string,
    variable: string,
    textVar?: string,
    border?: boolean
}) {
    return (
        <div className={cn("rounded-xl overflow-hidden flex flex-col shadow-sm", border && "border")}>
            <div
                className="h-24 w-full flex items-center justify-center p-4"
                style={{ backgroundColor: variable, color: textVar }}
            >
                <span className="font-mono text-sm font-medium opacity-90">{variable.replace('var(', '').replace(')', '')}</span>
            </div>
            <div className="bg-card p-3 border-t">
                <div className="text-sm font-medium font-sans">{name}</div>
            </div>
        </div>
    )
}

// Utility local
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ')
}
