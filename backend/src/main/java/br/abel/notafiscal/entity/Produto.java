package br.abel.notafiscal.entity;

import br.abel.notafiscal.enums.ProdutoSituacao;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "produto")
public class Produto extends PanacheEntity {

    @Column(name = "codigo", nullable = false)
    public String codigo;

    @Column(name = "descricao", nullable = false)
    public String descricao;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacao", nullable = false)
    public ProdutoSituacao situacao;
}

