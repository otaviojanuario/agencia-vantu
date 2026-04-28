import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function FieldShowcasePage() {
    return (
        <div className="p-10 space-y-16 max-w-4xl">
            <div>
                <h1 className="text-4xl font-bold font-sans tracking-tight mb-2">Field Component</h1>
                <p className="text-muted-foreground text-lg">
                    Componente para estruturar campos de formulário e grupos de opções no Design System.
                </p>
            </div>

            {/* Basic Use Case Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-sans border-b pb-2">Uso Básico</h2>
                <p className="text-muted-foreground">O componente base para envolver um label, input e helper text.</p>
                <div className="bg-card border rounded-xl p-8 max-w-sm">
                    <Field>
                        <FieldLabel htmlFor="nome">Nome Completo</FieldLabel>
                        <Input id="nome" placeholder="Digite seu nome" />
                        <FieldDescription>
                            Nome como aparecerá no seu perfil.
                        </FieldDescription>
                    </Field>
                </div>
            </section>

            {/* FieldGroup and FieldSet */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-sans border-b pb-2">Grupo de Campos Completo</h2>
                <p className="text-muted-foreground">Demonstração utilizando todos os subcomponentes: Legend, Group, Set e Separator num formulário de pagamento (Checkout).</p>

                <div className="bg-card border rounded-xl p-8 max-w-lg">
                    <form>
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Informações de Pagamento</FieldLegend>
                                <FieldDescription>
                                    Todas as transações são seguras e encriptadas via SSL.
                                </FieldDescription>

                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="card-name">Nome no Cartão</FieldLabel>
                                        <Input
                                            id="card-name"
                                            placeholder="Nome impresso no cartão"
                                            required
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="card-number">Número do Cartão</FieldLabel>
                                        <Input
                                            id="card-number"
                                            placeholder="1234 5678 9012 3456"
                                            required
                                        />
                                        <FieldDescription>
                                            Insira os 16 dígitos sem espaços.
                                        </FieldDescription>
                                    </Field>

                                    <div className="grid grid-cols-3 gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="month">Mês</FieldLabel>
                                            <Select defaultValue="">
                                                <SelectTrigger id="month">
                                                    <SelectValue placeholder="MM" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="01">01</SelectItem>
                                                    <SelectItem value="02">02</SelectItem>
                                                    <SelectItem value="03">03</SelectItem>
                                                    <SelectItem value="04">04</SelectItem>
                                                    <SelectItem value="05">05</SelectItem>
                                                    <SelectItem value="06">06</SelectItem>
                                                    <SelectItem value="07">07</SelectItem>
                                                    <SelectItem value="08">08</SelectItem>
                                                    <SelectItem value="09">09</SelectItem>
                                                    <SelectItem value="10">10</SelectItem>
                                                    <SelectItem value="11">11</SelectItem>
                                                    <SelectItem value="12">12</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="year">Ano</FieldLabel>
                                            <Select defaultValue="">
                                                <SelectTrigger id="year">
                                                    <SelectValue placeholder="YYYY" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="2024">2024</SelectItem>
                                                    <SelectItem value="2025">2025</SelectItem>
                                                    <SelectItem value="2026">2026</SelectItem>
                                                    <SelectItem value="2027">2027</SelectItem>
                                                    <SelectItem value="2028">2028</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="cvv">CVV</FieldLabel>
                                            <Input id="cvv" placeholder="123" required />
                                        </Field>
                                    </div>
                                </FieldGroup>
                            </FieldSet>

                            <FieldSeparator />

                            <FieldSet>
                                <FieldLegend>Endereço de Cobrança</FieldLegend>
                                <FieldGroup>
                                    <Field orientation="horizontal">
                                        <Checkbox id="same-as-shipping" defaultChecked />
                                        <FieldLabel
                                            htmlFor="same-as-shipping"
                                            className="font-normal cursor-pointer"
                                        >
                                            Mesmo do endereço de entrega
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>

                            <FieldSet>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="comments">Comentários (Opcional)</FieldLabel>
                                        <Textarea
                                            id="comments"
                                            placeholder="Gostaria de adicionar algo referente à entrega?"
                                            className="resize-none"
                                        />
                                    </Field>
                                </FieldGroup>
                            </FieldSet>

                            <Field orientation="horizontal" className="pt-4">
                                <Button type="submit">Finalizar Compra</Button>
                                <Button variant="outline" type="button">
                                    Cancelar
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </div>
            </section>
        </div>
    )
}
