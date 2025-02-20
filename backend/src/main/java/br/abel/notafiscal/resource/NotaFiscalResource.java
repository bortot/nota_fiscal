package br.abel.notafiscal.resource;

import br.abel.notafiscal.entity.Fornecedor;
import br.abel.notafiscal.entity.NotaFiscal;
import br.abel.notafiscal.entity.NotaFiscalItem;
import br.abel.notafiscal.repository.NotaFiscalItemRepository;
import br.abel.notafiscal.repository.NotaFiscalRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.Entity;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/nota-fiscal")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@ApplicationScoped
public class NotaFiscalResource {

    @Inject NotaFiscalRepository notaFiscalRepository;
    @Inject NotaFiscalItemRepository notaFiscalItemRepository;

    @GET
    public List<NotaFiscal> findAll() {
        return NotaFiscal.listAll();
    }

    @POST
    @Transactional
    public NotaFiscal create(NotaFiscal entity) {
        notaFiscalRepository.persist(entity);
        entity.notaFiscalItem.forEach(n -> n.notaFiscal = entity);
        notaFiscalItemRepository.persist(entity.notaFiscalItem);
        return entity;
    }
}
