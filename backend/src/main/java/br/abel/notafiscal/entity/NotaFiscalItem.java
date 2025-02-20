package br.abel.notafiscal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "nota-fiscal-item")
public class NotaFiscalItem extends PanacheEntity {

    @Column(name = "quantidade", nullable = false)
    public Integer quantidade;

    @Column(name = "valor_unitario", nullable = false)
    public BigDecimal valorUnitario;

    @ManyToOne
    @JoinColumn(name = "produto_id", nullable = false)
    public Produto produto;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "nota_fiscal_id", nullable = false)
    public NotaFiscal notaFiscal;
}
