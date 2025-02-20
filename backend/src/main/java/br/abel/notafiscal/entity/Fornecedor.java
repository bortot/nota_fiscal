package br.abel.notafiscal.entity;

import br.abel.notafiscal.enums.FornecedorSituacao;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "fornecedor")
public class Fornecedor extends PanacheEntity {

    @Column(name = "codigo", nullable = false)
    public String codigo;

    @Column(name = "razaoSocial", nullable = false)
    public String razaoSocial;

    @Column(name = "email", nullable = false)
    public String email;

    @Column(name = "telefone", nullable = false)
    public String telefone;

    @Column(name = "cnpj", nullable = false)
    public String cnpj;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacao", nullable = false)
    public FornecedorSituacao situacao;

    @Column(name = "dataBaixa", nullable = false)
    public LocalDate dataBaixa;
}