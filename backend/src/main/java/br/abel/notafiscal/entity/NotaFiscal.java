package br.abel.notafiscal.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "nota-fiscal")
public class NotaFiscal extends PanacheEntity {

    @Column(name = "numero", nullable = false)
    public String numero;

    @Column(name = "endereco", nullable = false)
    public String endereco;

    @Column(name = "data_emissao", nullable = false)
    public LocalDateTime dataEmissao;

    @Column(name = "valor_total", nullable = false)
    public BigDecimal valorTotal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fornecedor_id", nullable = false)
    public Fornecedor fornecedor;

    @OneToMany(mappedBy = "notaFiscal", orphanRemoval = true)
    public List<NotaFiscalItem> notaFiscalItem;

    @PrePersist
    @PreUpdate
    public void prePersist() {
        if (this.notaFiscalItem != null) {
            this.notaFiscalItem.forEach(n -> n.notaFiscal=this);
        }
    }

}
